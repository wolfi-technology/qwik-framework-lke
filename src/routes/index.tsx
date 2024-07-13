import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { OctopusIcon } from "~/shared/website-icon/octopus-icon/octopus-icon";

export default component$(() => {
  return (
    <>
      <div class="shadow-sm">
          <div class="max-w-7xl mx-auto py-8 flex items-center justify-between">
              <a href="/" class="text-xl font-semibold tracking-tight inline-flex gap-x-1"><OctopusIcon class="w-8 h-8" />GitHub Template</a>
          </div>
      </div>
        <main class="max-w-7xl mx-auto py-8">
            Welcome to the getting started template, feel free to replace all the content in this file and refer to the
            README file for the repository to understand the structured layout of the application.
        </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Wolfi Qwik Starter",
  meta: [
    {
      name: "description",
      content:
        "A template to get started with GitHub actions, Helm, Kubernetes, & Tailwind",
    },
  ],
};
