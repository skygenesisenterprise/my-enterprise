import * as React from "react";

import { InfoCard, KeyValueRow, MobileScreen, StatusBadge } from "@/components/mobile/developer-ui";
import { developerProfile, programStatus } from "@/data/developer";

export default function ProgramScreen() {
  return (
    <MobileScreen
      eyebrow="Program"
      title="Developer Program"
      subtitle="Membership overview for Aether Developer participants."
    >
      <InfoCard title="Membership" accent="#0A84FF">
        <StatusBadge label={developerProfile.tier} tone="blue" />
        <KeyValueRow label="Renewal" value={programStatus.renewal} />
        <KeyValueRow label="Teams" value={programStatus.teams} />
        <KeyValueRow label="Agreements" value={programStatus.agreements} />
      </InfoCard>
      <InfoCard title="Capabilities" accent="#34A853">
        <KeyValueRow label="Aether Store" value="Submission enabled" />
        <KeyValueRow label="Guilderia bots" value="Beta access" />
        <KeyValueRow label="SDK previews" value="Enabled" />
      </InfoCard>
    </MobileScreen>
  );
}
