import data from "@/dictionary.json";
import {Dictionary} from "@/models/Dictionary";

describe("Dictionary", () => {
    describe("constructor", () => {
        test("dto", () => {
            const dto = data[0];
            const dictionary = new Dictionary(dto);

            expect(dictionary.id).toEqual(String(dto.id));
            expect(dictionary.url).toEqual(String(dto.url));
        });
    })
});
