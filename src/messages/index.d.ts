import * as $protobuf from "protobufjs";
/** Namespace messages. */
export namespace messages {

    /** Namespace entry. */
    namespace entry {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (messages.entry.Error.Code|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IError);

            /** Error code. */
            public code: messages.entry.Error.Code;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: messages.entry.IError): messages.entry.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.entry.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Code enum. */
            enum Code {
                UNKNOWN = 0
            }
        }

        /** Properties of a GetEntryRequest. */
        interface IGetEntryRequest {

            /** GetEntryRequest id */
            id?: (string|null);

            /** GetEntryRequest creatorId */
            creatorId?: (string|null);

            /** GetEntryRequest traceId */
            traceId?: (string|null);
        }

        /** Represents a GetEntryRequest. */
        class GetEntryRequest implements IGetEntryRequest {

            /**
             * Constructs a new GetEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IGetEntryRequest);

            /** GetEntryRequest id. */
            public id: string;

            /** GetEntryRequest creatorId. */
            public creatorId: string;

            /** GetEntryRequest traceId. */
            public traceId: string;

            /**
             * Creates a new GetEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEntryRequest instance
             */
            public static create(properties?: messages.entry.IGetEntryRequest): messages.entry.GetEntryRequest;

            /**
             * Encodes the specified GetEntryRequest message. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @param message GetEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEntryRequest message, length delimited. Does not implicitly {@link messages.entry.GetEntryRequest.verify|verify} messages.
             * @param message GetEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IGetEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryRequest;

            /**
             * Decodes a GetEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryRequest;

            /**
             * Verifies a GetEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryRequest;

            /**
             * Creates a plain object from a GetEntryRequest message. Also converts values to other types if specified.
             * @param message GetEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.GetEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetEntryResponse. */
        interface IGetEntryResponse {

            /** GetEntryResponse payload */
            payload?: (messages.entry.GetEntryResponse.IPayload|null);

            /** GetEntryResponse error */
            error?: (messages.entry.IError|null);

            /** GetEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a GetEntryResponse. */
        class GetEntryResponse implements IGetEntryResponse {

            /**
             * Constructs a new GetEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IGetEntryResponse);

            /** GetEntryResponse payload. */
            public payload?: (messages.entry.GetEntryResponse.IPayload|null);

            /** GetEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** GetEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new GetEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetEntryResponse instance
             */
            public static create(properties?: messages.entry.IGetEntryResponse): messages.entry.GetEntryResponse;

            /**
             * Encodes the specified GetEntryResponse message. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @param message GetEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IGetEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetEntryResponse message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.verify|verify} messages.
             * @param message GetEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IGetEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryResponse;

            /**
             * Decodes a GetEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryResponse;

            /**
             * Verifies a GetEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryResponse;

            /**
             * Creates a plain object from a GetEntryResponse message. Also converts values to other types if specified.
             * @param message GetEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.GetEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GetEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.GetEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.GetEntryResponse.IPayload): messages.entry.GetEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.GetEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.GetEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.GetEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.GetEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.GetEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.GetEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.GetEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CreateEntryRequest. */
        interface ICreateEntryRequest {

            /** CreateEntryRequest text */
            text?: (string|null);

            /** CreateEntryRequest creatorId */
            creatorId?: (string|null);

            /** CreateEntryRequest traceId */
            traceId?: (string|null);
        }

        /** Represents a CreateEntryRequest. */
        class CreateEntryRequest implements ICreateEntryRequest {

            /**
             * Constructs a new CreateEntryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.ICreateEntryRequest);

            /** CreateEntryRequest text. */
            public text: string;

            /** CreateEntryRequest creatorId. */
            public creatorId: string;

            /** CreateEntryRequest traceId. */
            public traceId: string;

            /**
             * Creates a new CreateEntryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateEntryRequest instance
             */
            public static create(properties?: messages.entry.ICreateEntryRequest): messages.entry.CreateEntryRequest;

            /**
             * Encodes the specified CreateEntryRequest message. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @param message CreateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateEntryRequest message, length delimited. Does not implicitly {@link messages.entry.CreateEntryRequest.verify|verify} messages.
             * @param message CreateEntryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.ICreateEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryRequest;

            /**
             * Decodes a CreateEntryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateEntryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryRequest;

            /**
             * Verifies a CreateEntryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateEntryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateEntryRequest
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryRequest;

            /**
             * Creates a plain object from a CreateEntryRequest message. Also converts values to other types if specified.
             * @param message CreateEntryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.CreateEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateEntryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateEntryResponse. */
        interface ICreateEntryResponse {

            /** CreateEntryResponse payload */
            payload?: (messages.entry.CreateEntryResponse.IPayload|null);

            /** CreateEntryResponse error */
            error?: (messages.entry.IError|null);

            /** CreateEntryResponse traceId */
            traceId?: (string|null);
        }

        /** Represents a CreateEntryResponse. */
        class CreateEntryResponse implements ICreateEntryResponse {

            /**
             * Constructs a new CreateEntryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.ICreateEntryResponse);

            /** CreateEntryResponse payload. */
            public payload?: (messages.entry.CreateEntryResponse.IPayload|null);

            /** CreateEntryResponse error. */
            public error?: (messages.entry.IError|null);

            /** CreateEntryResponse traceId. */
            public traceId: string;

            /**
             * Creates a new CreateEntryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateEntryResponse instance
             */
            public static create(properties?: messages.entry.ICreateEntryResponse): messages.entry.CreateEntryResponse;

            /**
             * Encodes the specified CreateEntryResponse message. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @param message CreateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.ICreateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateEntryResponse message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.verify|verify} messages.
             * @param message CreateEntryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.ICreateEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryResponse;

            /**
             * Decodes a CreateEntryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateEntryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryResponse;

            /**
             * Verifies a CreateEntryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateEntryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateEntryResponse
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryResponse;

            /**
             * Creates a plain object from a CreateEntryResponse message. Also converts values to other types if specified.
             * @param message CreateEntryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.CreateEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateEntryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CreateEntryResponse {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.CreateEntryResponse.IPayload);

                /** Payload id. */
                public id: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.CreateEntryResponse.IPayload): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.CreateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.CreateEntryResponse.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.CreateEntryResponse.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.CreateEntryResponse.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.CreateEntryResponse.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an InfoEntry. */
        interface IInfoEntry {

            /** InfoEntry payload */
            payload?: (messages.entry.InfoEntry.IPayload|null);

            /** InfoEntry traceId */
            traceId?: (string|null);
        }

        /** Represents an InfoEntry. */
        class InfoEntry implements IInfoEntry {

            /**
             * Constructs a new InfoEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.entry.IInfoEntry);

            /** InfoEntry payload. */
            public payload?: (messages.entry.InfoEntry.IPayload|null);

            /** InfoEntry traceId. */
            public traceId: string;

            /**
             * Creates a new InfoEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InfoEntry instance
             */
            public static create(properties?: messages.entry.IInfoEntry): messages.entry.InfoEntry;

            /**
             * Encodes the specified InfoEntry message. Does not implicitly {@link messages.entry.InfoEntry.verify|verify} messages.
             * @param message InfoEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.entry.IInfoEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InfoEntry message, length delimited. Does not implicitly {@link messages.entry.InfoEntry.verify|verify} messages.
             * @param message InfoEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.entry.IInfoEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InfoEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InfoEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntry;

            /**
             * Decodes an InfoEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InfoEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntry;

            /**
             * Verifies an InfoEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InfoEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InfoEntry
             */
            public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntry;

            /**
             * Creates a plain object from an InfoEntry message. Also converts values to other types if specified.
             * @param message InfoEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.entry.InfoEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InfoEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InfoEntry {

            /** Properties of a Payload. */
            interface IPayload {

                /** Payload id */
                id?: (string|null);

                /** Payload text */
                text?: (string|null);
            }

            /** Represents a Payload. */
            class Payload implements IPayload {

                /**
                 * Constructs a new Payload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messages.entry.InfoEntry.IPayload);

                /** Payload id. */
                public id: string;

                /** Payload text. */
                public text: string;

                /**
                 * Creates a new Payload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payload instance
                 */
                public static create(properties?: messages.entry.InfoEntry.IPayload): messages.entry.InfoEntry.Payload;

                /**
                 * Encodes the specified Payload message. Does not implicitly {@link messages.entry.InfoEntry.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messages.entry.InfoEntry.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payload message, length delimited. Does not implicitly {@link messages.entry.InfoEntry.Payload.verify|verify} messages.
                 * @param message Payload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messages.entry.InfoEntry.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.entry.InfoEntry.Payload;

                /**
                 * Decodes a Payload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.entry.InfoEntry.Payload;

                /**
                 * Verifies a Payload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payload
                 */
                public static fromObject(object: { [k: string]: any }): messages.entry.InfoEntry.Payload;

                /**
                 * Creates a plain object from a Payload message. Also converts values to other types if specified.
                 * @param message Payload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messages.entry.InfoEntry.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace error. */
    namespace error {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (messages.error.Error.Code|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: messages.error.IError);

            /** Error code. */
            public code: messages.error.Error.Code;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: messages.error.IError): messages.error.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link messages.error.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: messages.error.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link messages.error.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: messages.error.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.error.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.error.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): messages.error.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: messages.error.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Code enum. */
            enum Code {
                UNKNOWN = 0
            }
        }
    }
}
