/**
 * Test cases with jest
 */
import { inscribeText } from "../bridging/ordinals_snap";

describe("Ordinal Tests", () => {
    it("should inscribe text", async () => {
        const secret = "fc7458de3d5616e7803fdc81d688b9642641be32fee74c4558ce680cac3d4111";
        const toAddress = "bc1pxaneaf3w4d27hl2y93fuft2xk6m4u3wc4rafevc6slgd7f5tq2dqyfgy06";
        const tx = await inscribeText(secret, toAddress, 1, "Hello World!", 546);
        expect(tx.getId()).toBe("9312bc8a9541dd3e4b22993740ff96449a52dbca00b8be22b2979bb25053f7d6");
    });
});