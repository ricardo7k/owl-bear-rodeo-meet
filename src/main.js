// main.js
import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '240580388131';
const MAIN_STAGE_URL = "https://www.owlbear.rodeo/room/EbePgrr09_pq/TheApishCurse";

export async function setUpAddon() { 
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  const sidePanelClient = await session.createSidePanelClient();
  document
    .getElementById('start-activity')
    .addEventListener('click', async () => {
      await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
    });
}

export async function initializeMainStage() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  await session.createMainStageClient();
}
