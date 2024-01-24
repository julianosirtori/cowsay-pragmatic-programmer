import { getRandomTip, cowsay } from "./index";
import { tips } from "@/data/data.json";

test("getRandomTip", () => {
	const tip = getRandomTip();
	expect(tips.includes(tip)).toBe(true);
});

test("cowsay", () => {
	const output = cowsay("Test ");

	expect(output).toEqual(` _______
< Test  >
 -------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`);
});
