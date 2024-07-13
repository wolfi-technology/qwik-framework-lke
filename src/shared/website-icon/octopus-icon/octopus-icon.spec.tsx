import { createDOM } from "@builder.io/qwik/testing";
import { expect, test } from "vitest";
import { OctopusIcon } from "~/shared/website-icon/octopus-icon/octopus-icon";

test(`Should render the octopus icon correctly`, async () => {
    const { screen, render } = await createDOM();
    await render(<OctopusIcon id="test-icon" />);
    const element = screen.ownerDocument.getElementById("test-icon");
    expect(element).toBeTruthy();
});
