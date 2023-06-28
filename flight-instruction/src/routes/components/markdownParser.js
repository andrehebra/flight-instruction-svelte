import fs from 'fs';

function parseMarkdown(path) {

    let listMarker = false;
    let markdown;
    let writeToFile = '';
    let singleLine = "";

    let tabTracker = false;
    let individualTabTracker = false;

    let pathCheck = path;
    let pathLength = pathCheck.replace(/[^/]/g, "").length;
    pathCheck = '';
    for (let i = 0; i < pathLength; i++) {
        pathCheck = pathCheck.concat("../");
    }
    pathCheck = pathCheck.concat("components/");

    fs.writeFile('../' + path + '+page.svelte', "", err => {
        console.error(err);
    });

    function writeFile(string) {
        fs.appendFile('../' + path + '+page.svelte', string + "\n", err => {
            console.error(err);
            return;
        })
    }

    function appendSvelte(string) {
        writeToFile = writeToFile.concat(string + '\n');
    }
    

    //fs.writeFile('../' + path + '+page.svelte', "<script>\n     import NavBar from '" + pathCheck + "'; \n     import {  List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'\n</script>\n\n<NavBar></NavBar>\n\n", err => {
    //    console.error(err);
    //    return;
    //})

    fs.readFile('../' + path + 'lesson.md', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        markdown = data;

        appendSvelte("<script>\n     import NavBar from '" + pathCheck + "NavBar.svelte'; \n     import LessonCard from '" + pathCheck + "LessonCard.svelte'; \n     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'\n</script>\n\n<NavBar></NavBar>\n\n");

        appendSvelte('<div class="holder"><div class="contents">\n');
        
        for (let i = 0; i < markdown.length; i++) {
            if (markdown.charAt(i) == '\n') {
                singleLine = singleLine.replace(/(\r\n|\n|\r)/gm, "");
                if (singleLine == "") {

                } else if (singleLine[3] == '#') {
                    singleLine = singleLine.substring(4);
                    appendSvelte("<Heading tag='h6'>" + singleLine + "</Heading>");
                } else if (singleLine[2] == '#') {
                    singleLine = singleLine.substring(3);
                    appendSvelte("<Heading tag='h5'>" + singleLine + "</Heading>");
                } else if (singleLine[1] == '#') {
                    singleLine = singleLine.substring(2);
                    appendSvelte("<Heading tag='h2'>" + singleLine + "</Heading>");
                } else if (singleLine[0] == '#') {
                    singleLine = singleLine.substring(1);
                    appendSvelte("<Heading tag='h1'>" + singleLine + "</Heading>");
                } else if (singleLine[0] == '@') {
                    singleLine = singleLine.substring(1);
                    appendSvelte('<div class="image"><Img size="max-w-full" src=' + singleLine + '></Img></div>');
                } else if (singleLine[0] == '&') {
                    singleLine = singleLine.substring(1);
                    appendSvelte('<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/' + singleLine + '/public"></Img></div>');
                } else if (singleLine[0] == '$') {
                    singleLine = singleLine.substring(1);
                    appendSvelte('<Blockquote border bg class="p-4 my-4"><P size="sm" height="relaxed">' + singleLine + '</P></Blockquote>')
                } else if (singleLine[0] == '<') {
                    appendSvelte(singleLine);
                } else if (singleLine[0] == '!') {
                    let addressMarker = false;
                    let address = "";
                    let text = "";
                    for (let j = 0; j < singleLine.length; j++) {
                        if (singleLine.charAt(j) == '"') {
                            if (addressMarker == true) {
                                addressMarker = false;
                            } else {
                                addressMarker = true;
                            }
                        }

                        if (addressMarker == true) {
                            if (singleLine.charAt(j) != '"') {
                                address = address.concat(singleLine.charAt(j));
                            }
                        } else if (singleLine.charAt(j) != '"' && singleLine.charAt(j) != '!') {
                            text = text.concat(singleLine.charAt(j));
                        }
                    }

                    appendSvelte("<Button href='" + address + "'>" + text + "</Button>");
                } else if (singleLine == '--') {
                    appendSvelte('<Hr class="my-8" height="h-px" />');
                } else if (singleLine[0] == "*") {
                    if (listMarker == false && markdown.charAt(i+1) == "*") {
                        appendSvelte('<List ulClass="max-w" tag="ul" class="space-y-1"><Li>' + singleLine.substring(1) + "</Li>");
                        listMarker = true;
                    } else if (listMarker == false && markdown.charAt(i+1) != "*") {
                        appendSvelte('<List ulClass="max-w" tag="ul" class="space-y-1"><Li>' + singleLine.substring(1) + "</Li></List>");
                    } else if (listMarker == true && markdown.charAt(i+1) != "*") {
                        appendSvelte('<Li>' + singleLine.substring(1) + "</Li></List>");
                        listMarker = false;
                    } else if (listMarker == true && markdown.charAt(i+1) == "*") {
                        appendSvelte('<Li>' + singleLine.substring(1) + "</Li>");
                    }
                } else if (singleLine == '{tabs}' || tabTracker == true) {
                    if (tabTracker == false) {
                        appendSvelte("<div><Tabs style='underline'>");
                        tabTracker = true;
                    } else if (singleLine == '{/tabs}') {
                        tabTracker = false;
                        individualTabTracker = false;
                        appendSvelte("</div></TabItem></Tabs></div>");
                    } else if (singleLine[0] == '{' && individualTabTracker == false) {
                        singleLine = singleLine.replace(/({|})/g, "");
                        appendSvelte('<TabItem open title="' + singleLine + '"><div class="contents">');
                        individualTabTracker = true;
                    } else if (singleLine[0] == '{' && individualTabTracker == true) {
                        singleLine = singleLine.replace(/({|})/g, "");
                        appendSvelte('</div></TabItem>');
                        appendSvelte('<TabItem title="' + singleLine + '"><div class="contents">');
                    } 
                } else {
                    appendSvelte("<P>" + singleLine + "</P>");
                }

                singleLine = "";
            } else {
                singleLine = singleLine.concat(markdown.charAt(i));
            }
        }

        appendSvelte('</div></div>\n\n\n');

        appendSvelte("<style>\n.holder { \ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n.contents {\nmax-width: 1000px;\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\n}\n.image {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n}\n</style>");

        writeFile(writeToFile);
    });

    
    
}

parseMarkdown("maneuvers/shortfield/takeoff/");
parseMarkdown("maneuvers/softfield/takeoff/");
parseMarkdown("maneuvers/softfield/landing/");
parseMarkdown("maneuvers/goaround/");
parseMarkdown("maneuvers/stalls/poweron/");
parseMarkdown("maneuvers/stalls/poweroff/");
parseMarkdown("maneuvers/basicinstrument/");
parseMarkdown("maneuvers/steepturns/");
parseMarkdown("maneuvers/spinawareness/");
parseMarkdown("maneuvers/groundreference/");
parseMarkdown("maneuvers/emergency/emergencydescent/");
parseMarkdown("maneuvers/emergency/enginefailure/");
parseMarkdown("maneuvers/steepspiral/");
parseMarkdown("maneuvers/poweroff180/");

parseMarkdown("lessons/foi/assessmentandcritique/");

parseMarkdown("lessons/foi/humanbehaviorandeffectivecommunication/");
parseMarkdown("lessons/foi/humanbehaviorandeffectivecommunication/defensemechanisms/");
parseMarkdown("lessons/foi/humanbehaviorandeffectivecommunication/humanneeds/");

parseMarkdown("lessons/foi/instructorresponsibilitiesandprofessionalism/");
parseMarkdown("lessons/foi/learningprocess/");
parseMarkdown("lessons/foi/riskmanagement/");
parseMarkdown("lessons/foi/teachingprocess/");
parseMarkdown("lessons/foi/techniquesofflightinstruction/");

parseMarkdown("lessons/technicalsubjects/aeromedical/");
parseMarkdown("lessons/technicalsubjects/cfrandpublications/");
parseMarkdown("lessons/technicalsubjects/flightcontrols/");
parseMarkdown("lessons/technicalsubjects/highaltoperations/");
parseMarkdown("lessons/technicalsubjects/incursionavoidance/");
parseMarkdown("lessons/technicalsubjects/logbookentriesandendorsements/");
parseMarkdown("lessons/technicalsubjects/nationalairspacesystem/");
parseMarkdown("lessons/technicalsubjects/navandflightplanning/");
parseMarkdown("lessons/technicalsubjects/navigationsystemsandradarservices/");
parseMarkdown("lessons/technicalsubjects/nightoperations/");
parseMarkdown("lessons/technicalsubjects/principlesofflight/");
parseMarkdown("lessons/technicalsubjects/weightandbalance/");
parseMarkdown("lessons/technicalsubjects/scanningandcollisionavoidance/");

parseMarkdown("lessons/weather/atmosphericcomposition/");