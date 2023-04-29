<script>
     import NavBar from './../components/NavBar.svelte'; 
     import LessonCard from './../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Research Genre Production</Heading>
<P>While the FAA has relatively strict standards for the information that it publishes, aviation journalists and influencers have far greater control over the mediums and genres that they choose to inhabit. A few of these genres are displayed below:</P>
<Heading tag='h2'>Informational News</Heading>
<P>This genre typically sticks to fact-based reporting, with little room for humor or entertainment. While there is certainly a push for being the first on the story, generally information is withheld until released by governing bodies (in the United States that would be the FAA and NTSB). While there are news agencies that focus on providing information to people in the aviation industry, this genre convention typically assumes that the reader has little to no experience in aviation, and attempts to make explanations for different phenomena as simple as possible. An example of this genre convention is shown below:</P>
<Button href='https://www.npr.org/2018/10/29/661651935/indonesia-airliner-crashes-with-188-aboard'> NPR - Indonesian Airliner Crashes With 189 Aboard, Minutes After Takeoff</Button>
<P>This article focuses almost entirely on verified facts of what happened, without more information. Below is a quote from the article that showcases this:</P>
<Blockquote border bg class="p-4 my-4"><P size="md" height="relaxed">"We don't dare to say what the facts are, or are not, yet," Edward Sirait, the chief executive of Lion Air Group, told Reuters. "We are also confused about the why, since it was a new plane."</P></Blockquote>
<P>This convention of strictly following the facts is important, although it can often come off as non-empathetic. As family members and loved ones search for answers in the aftermath of an accident, it can often be disheartening to not report on information that isn't verified. However, the implications of reporting incorrect information are immense.</P>
<Heading tag='h2'>Documentaries</Heading>
<P>The long-form nature of documentaries allows for an in-depth understanding of concepts in aviation that would otherwise be inaccessible to someone outside of the industry. While this has many advantages, it can also include drawbacks. Information that is not properly presented or potentially left out can lead to the audience gaining an incomplete or incorrect picture of what led to an accident.</P>
<P>Combining this with the more dramatized nature of documentaries, the potential for misunderstandings grows. A great display of the negative impact a documentary can have is a recent Netflix production titled "MH370: The Plane That Disappeared." A link to the trailer is below:</P>
<Button href='https://www.youtube.com/watch?v=TDg0m2Q3H8c&ab_channel=Netflix'>MH370: The Plane That Disappeared - Official Trailer</Button>
<P>The documentary showcases an aviation journalist providing unfounded conspiracy theories while horrid images of grieving family members seek answers. Fortunately, however, other aviation journalists were quick to refute the claims made in the documentary.</P>
<Button href='https://bigthink.com/the-present/what-happened-flight-mh370-netflix-documentary/'>Big Think - What happened to Flight MH370? Don't Believe What Netflix's Documentary Tells You</Button>
<P>A quote from the article is below:</P>
<Blockquote border bg class="p-4 my-4"><P size="md" height="relaxed"> The documentary heavily relied on journalist Jeff Wise, who proposed that Russian terrorists hijacked the airplane by climbing down into an electronics compartment (called the Main Equipment Center, MEC) hidden beneath the first class cabin, commandeering the plane, faking satellite location data, and flying it to Kazakhstan. But this theory ignores some important facts and ends up creating more questions than answers.</P></Blockquote>
<P>As I focused heavily on misinformation regarding aviation safety in my research paper, it was incredibly disheartening to see a huge corporation like Netflix actively ignore the facts of one of the most tragic events in aviation history, all while giving false hope to the family members of those who passed away.</P>
<Heading tag='h2'>Lesson Plans</Heading>
<P>Lesson plans are mainly used for student pilots to learn concepts before attempting them in the airplane. The genre typically follows a dry pattern, without any attempt at being entertaining. Oftentimes procedures are given in bullet points, and no additional information is given beyond what is required.</P>
<Heading tag='h2'>Humorous Journalism</Heading>
<P>The last genre that I will focus on is rather niche in comparison to the two above. However, it is most interesting to look at from a genre perspective. While aviation journalism has oftentimes taken a dry and fact-based approach, there have been a few writers who have found a way to merge informational reporting with humor and entertainment. A great example of this is Paul Bertorelli, a journalist at AVweb, who takes pride in providing valuable information that is incredibly entertaining. One of his articles is linked below: </P>
<Button href='https://www.avweb.com/insider/phils-terrible-horrible-really-no-good-week/'>AVweb - Phil's Terrible, Horrible, Really No Good Week</Button>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>My Work in Genre Production</Heading>
<Heading tag='h5'>Humorous Journalism Article</Heading>
<P>This was one of my artifacts for Project 3, which replicates the genre conventions of humorous aviation journalism.</P>
<Button href='/enc1102/enc1102-final/research-genre-production/article'>How to Crash Land in the Mountains with Style and Grace</Button>
<P>This article mainly took inspiration from Paul Bertorelli and intended to also poke fun at Trevor Jacob, an aviation influencer who purposefully crashed his plane in the mountains.</P>
<Heading tag='h5'>Lesson Plan</Heading>
<P>Again from Project 3, I wrote a sample lesson plan following the common genre conventions of fact-based lessons that provide no additional information beyond what is required.</P>
<Button href='/enc1102/enc1102-final/research-genre-production/lesson'>Steep Turns Lesson Plan</Button>
<P>Both of these artifacts attempted to mainly follow the genre criterion for each medium, with slight twists.</P>
</div></div>



<style>
.holder { 
display: flex;
justify-content: center;
align-items: center;
}
.contents {
max-width: 1000px;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
}
.image {
display: flex;
align-items: center;
justify-content: center;
}
</style>

