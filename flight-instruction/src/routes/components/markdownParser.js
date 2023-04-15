import fs from 'fs';

function parseMarkdown(path) {

    let listMarker = false;
    let markdown;
    let writeToFile = '';
    let singleLine = "";
    let pathCheck = path;
    let pathLength = pathCheck.replace(/[^/]/g, "").length;
    pathCheck = '';
    for (let i = 0; i < pathLength; i++) {
        pathCheck = pathCheck.concat("../");
    }
    pathCheck = pathCheck.concat("components/NavBar.svelte");

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

        appendSvelte("<script>\n     import NavBar from '" + pathCheck + "'; \n     import {  List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'\n</script>\n\n<NavBar></NavBar>\n\n");

        appendSvelte('<div class="holder"><div class="contents">\n');
        
        for (let i = 0; i < markdown.length; i++) {
            if (markdown.charAt(i) == '\n') {
                if (singleLine == "") {

                } else if (singleLine[2] == '#') {
                    singleLine = singleLine.substring(3);
                    appendSvelte("<Heading tag='h5'>" + singleLine + "</Heading>");
                } else if (singleLine[1] == '#') {
                    singleLine = singleLine.substring(2);
                    appendSvelte("<Heading tag='h2'>" + singleLine + "</Heading>");
                } else if (singleLine[0] == '#') {
                    singleLine = singleLine.substring(1);
                    appendSvelte("<Heading tag='h1'>" + singleLine + "</Heading>");
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
                } else if (singleLine[0] == "*") {
                    if (listMarker == false && markdown.charAt(i+1) == "*") {
                        appendSvelte('<List ulClass="max-w" tag="ul" class="space-y-1"><Li>' + singleLine.substring(1) + "</Li>");
                        listMarker = true;
                    } else if (listMarker == false && markdown.charAt(i+1) != "*") {
                        console.log(markdown.charAt(i+1))
                        appendSvelte('<List ulClass="max-w" tag="ul" class="space-y-1"><Li>' + singleLine.substring(1) + "</Li></List>");
                    } else if (listMarker == true && markdown.charAt(i+1) != "*") {
                        appendSvelte('<Li>' + singleLine.substring(1) + "</Li></List>");
                        listMarker = false;
                    } else if (listMarker == true && markdown.charAt(i+1) == "*") {
                        appendSvelte('<Li>' + singleLine.substring(1) + "</Li>");
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

        appendSvelte("<style>\n.holder { \ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n.contents {\nmax-width: 800px;\npadding: 20px;\ndisplay: flex;\nflex-direction: column;\ngap: 15px;\n}\n.image {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n}\n</style>");

        writeFile(writeToFile);
    });

    
    
}

parseMarkdown("maneuvers/shortfield/takeoff/");