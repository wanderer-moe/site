<script>
import { t } from "svelte-i18n";
</script>

<svelte:head>
  <title>Privacy Policy | wanderer.moe</title>
</svelte:head>

<div class="min-h-screen">
  <div class="px-2 py-24 md:px-12 lg:px-24">
    <div class="mb-2">
      <p class="sigfont text-left text-4xl text-white {$t('direction')}">
        {$t("privacyPolicy.title")}
      </p>
      <div>
        <p class="sigfont text-left text-xl text-white {$t('direction')}">
          {$t("privacyPolicy.whatIsCollected")}:
        </p>
        <div class="m-2">
          <p class="text-white {$t('direction')}">
            {$t("privacyPolicy.sentryTitle")}
          </p>
          <p class="text-gray-400 {$t('direction')}">
            {$t("privacyPolicy.sentryAnswer")}
          </p>
          <p class="text-white {$t('direction')}">
            {$t("privacyPolicy.analyticsTitle")}
          </p>
          <p class="text-gray-400 {$t('direction')}">
            {$t("privacyPolicy.analyticsAnswer")}
          </p>
        </div>
      </div>
    </div>
    <div>
      <p class="sigfont text-left text-xl text-white">
        {$t("privacyPolicy.whatIsNotCollected")}:
      </p>
      <div class="m-2">
        <p class="text-gray-400">
          {$t("privacyPolicy.whatIsNotCollectedAnswer")}
        </p>
        <p class="text-white">
          {$t("privacyPolicy.advertisementTitle")}
        </p>
        <p class="text-gray-400">
          {$t("privacyPolicy.advertisementAnswer")}
        </p>
      </div>
    </div>
    <p class="sigfont text-left text-xl text-white">
      {$t("privacyPolicy.contactInfo")}
    </p>
  </div>
</div>
