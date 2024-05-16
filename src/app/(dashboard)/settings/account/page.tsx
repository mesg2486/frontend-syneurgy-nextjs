import AccountSettingsForm from "@/components/forms/AccountSettingsForm";
import React from "react";

export default function page() {
  return (
    <div className="py-8 space-y-6">
      <h2 className="text-xl font-medium">Settings</h2>
      <AccountSettingsForm />
    </div>
  );
}
