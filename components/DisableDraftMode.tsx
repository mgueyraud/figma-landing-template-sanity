"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  if (window !== window.parent || !!window.opener) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div>
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button
          className="fixed bottom-3 right-3 px-3 py-2 rounded-md bg-white text-black"
          type="button"
          onClick={disable}
        >
          Disable draft mode
        </button>
      )}
    </div>
  );
}
