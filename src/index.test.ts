import { expect, test } from "bun:test";
import { getRandomIndex, cowWithRandomTip } from "./index";

test("getRandomTip", () => {
	const index = getRandomIndex();
	expect(index).toBeNumber()
});

test("cowWithRandomTip", () => {
	const cowWithTip = cowWithRandomTip();		
	expect(cowWithTip).toContain(" (oo)\\")
	expect(cowWithTip).toContain("(__)")
	expect(cowWithTip).toContain("||----w |")
})