package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"time"

	entryMessage "./di_messages/entry"
	_ "github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/ptypes/timestamp"
	"github.com/nats-io/nats.go"
	"google.golang.org/protobuf/proto"
)

func main() {

	nc, err := nats.Connect("nats://127.0.0.1:4222")
	if err != nil {
		panic(err)
	}

	/*
		{
			"_id": {
				"$oid": "586ef44becbfca3a811e855b"
			},
			"text": "yeah!",
			"timeCreated": "2017-01-06T01:35:07+00:00",
			"userId": "586ef428f36d281a78399e8d",
			"__v": 0
		}
	*/

	var oldUserIDToNewUserID = make(map[string]string)
	oldUserIDToNewUserID["58759d46f36d285ed998f155"] = "2b5545ef-3557-4f52-994d-daf89e04c390"
	oldUserIDToNewUserID["5aa56c5768720f0035121d53"] = "bcf4e360-2bd4-41a1-a9d0-786577e02f4a"
	oldUserIDToNewUserID["58759d2ff36d285ed998f148"] = "bcf4e360-2bd4-41a1-a9d0-786577e02f4a"
	oldUserIDToNewUserID["586ef428f36d281a78399e8d"] = "bcf4e360-2bd4-41a1-a9d0-786577e02f4a"

	type ID struct {
		Oid string `json:"$oid"`
	}

	type Entry struct {
		ID          ID `json:"_id"`
		Text        string
		TimeCreated string
		TimeUpdated string
		UserID      string
	}

	data, err := ioutil.ReadFile("./entries.json")
	if err != nil {
		panic(err)
	}

	var entries []Entry
	marshalErr := json.Unmarshal([]byte(data), &entries)
	if marshalErr != nil {
		fmt.Println(marshalErr)
	}

	for i := 0; i < len(entries); i++ {
		entry := entries[i]
		timeCreated, err := time.Parse(time.RFC3339, entry.TimeCreated)
		if err != nil {
			panic(err)
		}
		timeCreatedSeconds := timeCreated.Unix()

		createdAt := timestamp.Timestamp{
			Seconds: timeCreatedSeconds,
		}

		e := &entryMessage.CreateEntryRequest{
			Payload: &entryMessage.CreateEntryRequest_Payload{
				Text:      entry.Text,
				CreatorId: oldUserIDToNewUserID[entry.UserID],
				CreatedAt: &createdAt,
			},
		}

		if entry.TimeUpdated != "" {
			timeUpdated, err := time.Parse(time.RFC3339, entry.TimeUpdated)
			if err != nil {
				panic(err)
			}
			timeUpdatedSeconds := timeUpdated.Unix()

			updatedAt := timestamp.Timestamp{
				Seconds: timeUpdatedSeconds,
			}

			e.Payload.UpdatedAt = &updatedAt
		}

		fmt.Println(fmt.Sprintf("Publishing message: %v for %v", entry.ID.Oid, e.Payload.CreatorId))

		out, err := proto.Marshal(e)
		if err != nil {
			panic(err)
		}

		nc.Publish("store.create.entry", out)
	}
}
