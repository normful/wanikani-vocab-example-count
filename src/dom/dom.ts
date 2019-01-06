import { Logger } from "../logger/logger";
import { http } from "gm-http";
import { getVocab } from "./getVocab";
import { extractExampleCount } from "../yourei/extractExampleCount";
import { headerID, countID } from "./domConstants";

const Log = new Logger();

const countCache = {
  yourei: {}
};

function isVocabLesson(): boolean {
  const mainInfo = document.getElementById("main-info");
  return mainInfo && mainInfo.className === "vocabulary";
}

export function createMutationObserver(): void {
  Log.debug("createMutationObserver");

  const obs = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(mutationRecord => {
      maybeQueryYourei(mutationRecord);
    });
  });

  const optAttrs = { attributes: true };
  obs.observe(document.getElementById("supplement-voc-meaning"), optAttrs);
}

function isTargetInlineStyleDisplayBlock(
  mutationRecord: MutationRecord
): boolean {
  const node = mutationRecord.target;

  if (node instanceof HTMLElement) {
    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap
    const attributes = node.attributes;

    // https://developer.mozilla.org/en-US/docs/Web/API/Attr
    const styleAttr = attributes.getNamedItem("style");

    return styleAttr.value === "display: block;";
  }

  return false;
}

function maybeQueryYourei(mutationRecord: MutationRecord): void {
  if (!isVocabLesson()) {
    Log.debug("not vocab lesson");
    return null;
  }

  const vocab = getVocab();
  if (!vocab) {
    Log.debug("vocab not found");
    return null;
  }

  if (!isTargetInlineStyleDisplayBlock(mutationRecord)) {
    Log.debug("mutation target inline style not display block");
    return null;
  }

  const cachedCount = countCache.yourei[vocab];
  if (cachedCount) {
    Log.debug(
      `reusing cached yourei value vocab=${vocab} cachedCount=${cachedCount}`
    );
    insertResults(cachedCount);
    return null;
  }

  queryYoureiThenInsertResults(vocab);
}

function queryYoureiThenInsertResults(vocab: string): void {
  Log.debug("queryYoureiThenInsertResults");
  const youreiUrl = `http://yourei.jp/${encodeURIComponent(vocab)}`;
  http
    .get(youreiUrl)
    .then((res: Response$) => {
      const exampleCount = extractExampleCount(res.responseText);
      if (!exampleCount) {
        return null;
      }

      countCache.yourei[vocab] = exampleCount;
      Log.debug(`countCache.yourei updated`, countCache.yourei);
      insertResults(exampleCount);
    })
    .catch(err => {
      Log.error("yourei.jp err:", err);
    });
}

function insertResults(exampleCount: number): void {
  Log.debug(`insertResults`);

  if ($(`#${headerID}`).length === 0) {
    const headerEl = $("<h2>")
      .text("Yourei.jp Examples")
      .attr("id", headerID);

    const countEl = $("<div>")
      .text(exampleCount.toString())
      .attr("id", countID);

    const targetEl = $("#supplement-voc-meaning .pure-u-1-4");

    targetEl.append(headerEl);
    targetEl.append(countEl);
    return null;
  }

  $(`#${countID}`).text(exampleCount.toString());
}
