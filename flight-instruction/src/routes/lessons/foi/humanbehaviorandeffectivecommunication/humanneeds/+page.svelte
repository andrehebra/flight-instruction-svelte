<script>
     import NavBar from '../../../../components/NavBar.svelte'; 
     import LessonCard from '../../../../components/LessonCard.svelte'; 
     import {  Hr, Blockquote, Tabs, TabItem, List, Li, Img, Heading, P, A, Mark, Secondary, Listgroup, AccordionItem, Accordion, Video, Button } from 'flowbite-svelte'
</script>

<NavBar></NavBar>


<div class="holder"><div class="contents">

<Heading tag='h1'>Human Needs</Heading>
<P>Below is a picture of Maslow's hierarchy of needs, which was developed by Abraham Maslow, who studied human needs, motivation, and personality.</P>
<div class="image"><Img size="max-w-full" src="https://imagedelivery.net/bfLWD0Qjtd593vL0tnvGqQ/12c077d7-b72d-4973-aec0-f9f39fdbb400/public"></Img></div>
<P>We can think of these needs as an ordered list. In order to satisfy the need above, one must satisfy the need below. For example, it is not possible for someone to have high self esteem without feeling love. Below is a description of each need. As an instructor, it is important to understand how these needs relate to one's ability to provide instruction to a learner.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Physiological Needs</Heading>
<P>Biological needs that are required for life and maintenance of the human body. For example, if a person is starving or dehydrated, nothing else matters, especially not instruction. It is not possible to properly instruct a learner when these needs are not met.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Security</Heading>
<P>All humans have a need to feel safe. Especially when it comes to flying, a learner can not absorb the required information and skills if they are afraid. Instructors can help satisfy this need by emphasizing safety during each lesson. Additionally, it is important to pay attention to a learner's fears and be able to combat them in positive ways.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Belonging (social needs)</Heading>
<P>This need comes from our natural desire to overcome feelings of loneliness and alienation. This involves giving and receiving love, affection, and a sense of belonging.</P>
<P>Aviation instructors should work hard to satisfy this need, as most learners will not naturally feel a sense of belonging when entering into the new environment of aviation. Instructors can help by being encouraging and welcoming, as well as assist them in joining the pilot community.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Esteem (internally and externally)</Heading>
<P>Humans need a high level of self respect and a sense of being respected by their peers. Overall, esteem is about feeling good about one's self. When these needs are satisfied, a person feels self-confident and valuable as a person. However, when these needs are not met, a person feels inferior, weak, helpless, and worthless. </P>
<P>Esteem needs influence both the instructor-learner relationship as well as the learner's interest in aviation training.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Cognitive and Aesthetic</Heading>
<P>This need breaks down into the need for both understanding the emotional need of the artist.</P>
<P>Humans have a deep need to understand what is going on around them. A person who understand what is going on around them can make informed decisions. This is an important thing to consider when a learner is first becoming familiar with an airplane. It is the instructor's responsibility to explain and guide the learner to satisfy this need.</P>
<P>Aesthetic needs are a little bit more subtle. There is no rational explanation as to why a person likes a specific piece of art, or even another person. A subtle feeling of dislike for an instructor or learner can play a role in an instructor's ability to properly teach and transfer information.</P>
<Hr class="my-8" height="h-px" />
<Heading tag='h2'>Self-Actualization</Heading>
<P>This need can only be met when all of the previous needs are. This need can be simply described as a person achieving what they were "born to do." This need can be the most difficult to fulfil, and it is well known that it can be a great challenge, as well as reward, to instruct a learner who was "born to be a pilot"</P>
<Hr class="my-8" height="h-px" />
<P>It is the instructor's responsibility to not only recognize a learners needs, but guide them in the direction of achieving them. </P>
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

