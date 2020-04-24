import data from "@/data.json";
import {CharacterType} from "@/models/CharacterType";

describe("CharacterType", () => {
    describe("constructor", () => {
        test("dto", () => {
            const dto = data.characters[0].type;
            const type = new CharacterType(dto);

            expect(type.name).toEqual(dto.name);
            expect(type.id).toEqual(String(dto.id));
        });
    })
});
