import data from "@/data.json";
import {Scheme} from "@/models/Scheme";

describe("Scheme", () => {
    describe("constructor", () => {
        test("dto", () => {
            const dto = data;
            const scheme = new Scheme(dto);

            expect(scheme.id).toEqual(String(dto.id));
            expect(scheme.restaurantId).toEqual(String(dto.restaurantId));
            expect(scheme.width).toEqual(dto.xCount);
            expect(scheme.height).toEqual(dto.yCount);
        });
    })
});
