import { extractExampleCount } from "../../src/yourei/extractExampleCount";

const getRes = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="keywords" content="想定,Yourei,Japanese,kanji,katakana,hiragana,examples,dictionary,synonyms,language,word,phrase"/>
<title>そうていExamples for “想定” and how to use it - Yourei.jp</title>
<meta name="description" content="Japanese examples for &quot;想定&quot; - その申し出が想定外すぎて脳が発言の内容を理解していないのだろうか。 ということは、持ってみるまではもう少し軽い物を想定していたわけだ。 原子エネルギー級の猛烈な力が働いたと想定するのが唯一の解釈である。"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link rel="search" type="application/opensearchdescription+xml" title="Yourei.jp" href="/static/xml/opensearch_yourei_jp.xml"/>
  <link rel="canonical" href="http://yourei.jp/%E6%83%B3%E5%AE%9A"/>
  <link rel="stylesheet" href="/static/CACHE/css/de6eb143670d.css" type="text/css" />
</head>
<body>

<div id="page">
  <header id="header">
  </header>
<div id="content-example-page" class="container">

  <!-- This contains ngram title, freq ngrams, and example sentences.
       Just closes before the side pane. -->
  <div id="examples-pane" class="col-sm-8 col-md-8 row">

    <!-- TITLE -->
    <h2 class="title-ngram">
      <span class="ngram">

        想定

      </span>

    </h2>

<!-- **. Most frequent - next_freq_ngrams -->
    <div id="next-freq-ngrams">
      <ul class="list-inline">
        <li>→</li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%95%E3%82%8C%E3%82%8B"><span class="ngram-highlight">想定</span>される <span class="next-ngram-freq-percentage">(8%)</span></a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B"><span class="ngram-highlight">想定</span>している <span class="next-ngram-freq-percentage">(6%)</span></a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%99%E3%82%8B"><span class="ngram-highlight">想定</span>する <span class="next-ngram-freq-percentage">(6%)</span></a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%82%8B"><span class="ngram-highlight">想定</span>されている <span class="next-ngram-freq-percentage">(6%)</span></a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E5%A4%96"><span class="ngram-highlight">想定</span>外 <span class="next-ngram-freq-percentage">(4%)</span></a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE"><span class="ngram-highlight">想定</span>したもの</a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%97%E3%81%A6%E3%81%8A%E3%82%8A"><span class="ngram-highlight">想定</span>しており</a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%95%E3%82%8C%E3%81%A6%E3%81%8A%E3%82%8A"><span class="ngram-highlight">想定</span>されており</a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E3%81%A7%E3%81%8D%E3%82%8B"><span class="ngram-highlight">想定</span>できる</a></li>

        <li><a class="ngram-link" href="/%E6%83%B3%E5%AE%9A%E4%BB%A5%E4%B8%8A"><span class="ngram-highlight">想定</span>以上</a></li>

      </ul>
    </div>    <!-- id="next-freq-ngrams" -->
    <div id="pos-label" class="pull-left">
      <span id="label-all-pos" class="label label-all-pos btn selected-pos">All</span>
        <span id="label-noun" class="label label-noun btn">Noun</span>
    </div>


<!-- **. Sentence List -->

    <div id="sentence-frequency-line" class="pull-right"><span id="num-examples" class="btn-default badge">10,168</span> examples
      <span id="search-time">(<span class="search-time">0.01</span> sec)</span>
    </div>

    <!-- SENTENCE LIST -->
    <div id="sentence-example-list" class="sentence-list-container clear">
      <ul class="sentence-list list-group">
        <li id="sentence-1" class="with-source-title list-group-item sentence odd clickable-sentence">
          <span class="the-sentence">その申し出が想定外すぎて<ruby>脳<rt>のう</rt></ruby>が発言の<ruby>内容<rt>ないよう</rt></ruby>を理解していないのだろうか。</span>
          <span class="next-sentence" style="display:none;">それともまだお願いの途中だとでも思っているのだろうか。</span>
          <span class="next-sentence-preview">…</span>
          <span class="sentence-source-title"><span class="cited-from">Cited from</span> 鈴木大輔『ご愁傷さまニノ宮くん 02』</span>
        </li>
        <li id="sentence-2" class="with-source-title list-group-item sentence even nonclickable-sentence">
          <span class="the-sentence">ということは、持ってみるまではもう少し軽い物を想定していたわけだ。</span>
          <span class="sentence-source-title"><span class="cited-from">Cited from</span> 今野緒雪『マリア様がみてる 35 私の巣』</span>
        </li>
  <footer id="footer">
  </footer>
</div>
</body>
</html>
`;

describe("extractExampleCount", () => {
  const tc = (html: string, expected: number) => {
    it("extracts", () => {
      expect(extractExampleCount(html)).toEqual(expected);
    });
  };

  tc(getRes, 10168);
  tc(``, null);
  tc(`<span id="num-examples" class="btn-default badge">123</span>`, 123);
});
