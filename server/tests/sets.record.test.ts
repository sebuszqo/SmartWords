import { SetRecord } from "../records/sets";
import { ValidationError } from "../errors/error";

const defaultSet = {
  name: "Test Set",
  description: "A test set",
  createdAt: new Date(),
  words: [
    { word: "test", meaning: "A trial or experiment" },
    {
      word: "example",
      meaning:
        "A thing characteristic of its kind or illustrating a general rule.",
    },
  ],
  __v: 0,
};

test("Can build AnnouncementRecord", () => {
  const set = new SetRecord({
    ...defaultSet,
  });
  expect(set.name).toBe("Test Set");
  expect(set.description).toBe("A test set");
  expect(set.words).toEqual([
    { word: "test", meaning: "A trial or experiment" },
    {
      word: "example",
      meaning:
        "A thing characteristic of its kind or illustrating a general rule.",
    },
  ]);
});
test("Creating SetRecord with empty name throws an error", () => {
  expect(
    () =>
      new SetRecord({
        ...defaultSet,
        name: "",
      })
  ).toThrowError(ValidationError);
});

test("Creating SetRecord with name longer than 100 characters throws an error", () => {
  const longName = "a".repeat(101);
  expect(
    () =>
      new SetRecord({
        ...defaultSet,
        name: longName,
      })
  ).toThrowError(ValidationError);
});

test("Creating SetRecord with description longer than 1000 characters throws an error", () => {
  const longDescription = "a".repeat(1001);
  expect(
    () =>
      new SetRecord({
        ...defaultSet,
        description: longDescription,
      })
  ).toThrowError(ValidationError);
});

test("Creating SetRecord with empty set of words throws an error", () => {
  expect(
    () =>
      new SetRecord({
        ...defaultSet,
        words: [],
      })
  ).toThrowError(ValidationError);
});

test("Creating SetRecord with valid data creates the record", () => {
  const set = new SetRecord({
    ...defaultSet,
  });
  expect(set).toBeInstanceOf(SetRecord);
});
