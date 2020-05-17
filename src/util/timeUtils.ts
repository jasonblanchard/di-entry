// TODO: More generic way to import this?
import proto from '../messages';

export function dateToProtobufTimestamp(date?: Date) {
  if (!date) return undefined;
  const seconds = date.getTime() / 1000;
  const timestamp = new proto.google.protobuf.Timestamp();
  timestamp.seconds = seconds;
  return timestamp;
}

export function protobufTimestampToDate(timestamp?: proto.google.protobuf.ITimestamp | null) {
  if (!timestamp?.seconds) return undefined;
  const milliseconds = Number(timestamp.seconds) * 1000;
  return new Date(milliseconds);
}
