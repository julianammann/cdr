<template>
  <div>
    <data-table :items="items">
      <template #tableHeading> Datenschutz&shy;erkl&auml;rung</template>
      <template #tableSubheading> Allgemeine Hinweise </template>
    </data-table>
    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <p>
        Quelle:
        <a href="https://www.e-recht24.de" target="_blank">e-recht24.de</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import DataTable from "@/components/DataTable.vue";

/**
 * initialize data for data table
 * @type {{point_4: {values: {p1_1: string, p1: string, p2: string, p3: string, p1_5: string, p1_4: string, p3_2: string, p1_3: string, l2: string, p2_2: string, p3_1: string, p1_2: string, p2_1: string, h1: string, h2: string, h3: string}, title: string}, point_3: {values: {p1_1: string, p1: string, p2: string, p12_1: string, p3: string, p11_1: string, p4: string, p2_3: string, p5: string, p2_2: string, p6: string, h10: string, p1_2: string, p2_1: string, p7: string, p8: string, h12: string, h1: string, p9: string, h11: string, h2: string, p7_1: string, h3: string, h13: string, h4: string, h5: string, l11: string, h6: string, p10: string, h7: string, h8: string, p12: string, h9: string, p11: string, p13: string}, title: string}, point_2: {values: {p1_1: string, p1: string, p2: string, p1_3: string, p1_2: string, h1: string, h2: string}, title: string}, point_1: {values: {p1: string, p2: string, p3: string, p4: string, p4_1: string, p2_1: string, h1: string, h2: string, h3: string, h4: string}, title: string}, point_0: {values: {info: string}, title: string}}}
 */
const items = {
  point_0: {
    title: "1. Datenschutz auf einen Blick",
    values: {
      info: "<p> Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>",
    },
  },
  point_1: {
    title: "Datenerfassung auf dieser Website",
    values: {
      h1: "<h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>",
      p1: " <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>",
      h2: "<h4>Wie erfassen wir Ihre Daten?</h4>",
      p2: "<p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>",
      p2_1: "<p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>",
      h3: "<h4>Wofür nutzen wir Ihre Daten?</h4>",
      p3: "<p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>",
      h4: "<h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>",
      p4: "<p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>",
      p4_1: "<p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>",
    },
  },
  point_2: {
    title: "2 Hosting",
    values: {
      h1: "<h3>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</h3>",
      p1: "<p>Anbieter ist die Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, 1855 Luxemburg (nachfolgend AWS).</p>",
      p1_1: "<p>Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von AWS verarbeitet. Hierbei können auch personenbezogene Daten an das Mutterunternehmen von AWS in die USA übermittelt werden. Die Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln gestützt. Details finden Sie hier: <a href'=https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/' target='_blank' rel='noopener noreferrer'>https://aws.amazon.com/de/blogs/security/aws-gdpr-data-processing-addendum/</a>.</p>",
      p1_2: "<p>Weitere Informationen entnehmen Sie der Datenschutzerklärung von AWS:<a href='https://aws.amazon.com/de/privacy/?nc1=f_pr' target='_blank' rel='noopener noreferrer'>https://aws.amazon.com/de/privacy/?nc1=f_pr</a>.</p>",
      p1_3: "<p>Die Verwendung von AWS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>",
      h2: "<h4>Auftragsverarbeitung</h4>",
      p2: "<p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>",
    },
  },
  point_3: {
    title: "3. Allgemeine Hinweise und Pflichtinformationen",
    values: {
      h1: "<h3>Datenschutz</h3>",
      p1: "<p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>",
      p1_1: "<p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>",
      p1_2: "<p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>",
      h2: "<h3>Hinweis zur verantwortlichen Stelle</h3>",
      p2: "<p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>",
      p2_1: "<p>Beispielfirma<br />Musterweg 10<br />90210 Musterstadt</p>",
      p2_2: "<p>Telefon: +49 (0) 123 44 55 66<br />E-Mail: julian.ammann@clothingdonation.de</p>",
      p2_3: "<p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>",
      h3: "<h3>Speicherdauer</h3>",
      p3: "<p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>",
      h4: "<h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>",
      p4: "<p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>",
      h5: "<h3>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>",
      p5: "<p>Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.</p>",
      h6: "<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>",
      p6: "<p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>",
      h7: "<h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowiegegen Direktwerbung (Art. 21 DSGVO)</h3>",
      p7: "<p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>",
      p7_1: "<p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>",
      h8: "<h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>",
      p8: "<p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>",
      h9: "<h3>Recht auf Datenübertragbarkeit</h3>",
      p9: "<p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>",
      h10: "<h3>Auskunft, Löschung und Berichtigung</h3>",
      p10: "<p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>",
      h11: "<h3>Recht auf Einschränkung der Verarbeitung</h3>",
      p11: "<p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>",
      l11:
        "<ul class='list-disc pl-4'>" +
        "    <li>" +
        "      Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen" +
        "      Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu" +
        "      &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das" +
        "      Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen" +
        "      Daten zu verlangen." +
        "    </li>" +
        "    <li>" +
        "      Wenn die Verarbeitung Ihrer personenbezogenen Daten" +
        "      unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der" +
        "      L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen." +
        "    </li>" +
        "    <li>" +
        "      Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie" +
        "      jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von" +
        "      Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der" +
        "      L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer" +
        "      personenbezogenen Daten zu verlangen." +
        "    </li>" +
        "    <li>" +
        "      Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss" +
        "      eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen" +
        "      werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen," +
        "      haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer" +
        "      personenbezogenen Daten zu verlangen." +
        "    </li>" +
        "  </ul>",
      p11_1:
        "<p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>",
      h12: "<h3>SSL- bzw. TLS-Verschlüsselung</h3>",
      p12: "<p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>",
      p12_1:
        "<p> Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>",
      h13: "<h3>Widerspruch gegen Werbe-E-Mails</h3>",
      p13: "<p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>",
    },
  },
  point_4: {
    title: "4. Datenerfassung auf dieser Website",
    values: {
      h1: "<h3>Cookies</h3>",
      p1: "<p>Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>",
      p1_1: "<p>Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>",
      p1_2: "<p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p>",
      p1_3: "<p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.</p>",
      p1_4: "<p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>",
      p1_5: "<p>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</p>",
      h2: "<h3>Server-Log-Dateien</h3>",
      p2: "<p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>",
      l2:
        "  <ul class='list-disc pl-4'>" +
        "    <li>Browsertyp und Browserversion</li>" +
        "    <li>verwendetes Betriebssystem</li>" +
        "    <li>Referrer URL</li>" +
        "    <li>Hostname des zugreifenden Rechners</li>" +
        "    <li>Uhrzeit der Serveranfrage</li>" +
        "    <li>IP-Adresse</li>" +
        "  </ul>",
      p2_1: "<p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>",
      p2_2: "<p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>",
      h3: "<h3>Kontaktformular</h3>",
      p3: "<p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>",
      p3_1: "<p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>",
      p3_2: "<p> Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>",
    },
  },
};
</script>

<style scoped></style>
