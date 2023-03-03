<script>
    import LessonDisplay from "../../../components/LessonDisplay.svelte";

    const systems = [
        {drop: false, title: "Introduction", contents: [
            {widget: "header", text: "What exactly are systems?"},
            {widget: "text", text: "Aircraft systems are simply the devices used to operate an aircraft. These can range from the flight controls to the avionics or electrical system. For learning purposes, it can be easier to separate them into a few different broad categories. While this lesson will broadly cover the systems onboard a Cessna 172S, many other aircraft have more complex systems or entirely unique ones."},
            {widget: 'text', text: 'This lesson will start by going through the primary and secondary control systems, and then progress through the other, more complex, but equally important systems.'},
            {widget: 'header', text: 'What am I required to know?'},
            {widget: 'text', text: 'Regardless of the regulations or requirements, it is incredibly important to understand all of the systems in any aircraft that you fly. That being said, both the private and commercial ACS requires a person demonstrate an understanding of: '},
            {widget: 'accordion', items: [{title: "Primary flight controls", text: "The group of controls that are used to directly control the aircraft. Think of ailerons, elevator (or stabilator), and rudder. While these are not the only controls, primary controls are the controls that are required to safely control an aircraft."},{title: "Secondary flight controls", text: "Secondary flight controls are intended to improve the performance characteristics of the aircraft, or to relieve the control pressure required by the primary flight controls."},{title: "Powerplant and propeller", text: "The powerplant, or engine, combined with a propeller, is what produces thrust to propel an aircraft. Fully understanding how a propeller and powerplant operate is critical to the safety of flight."},{title: "Landing gear", text: "Although the 172 doesn't have retractable landing gear, there is still a lot of information to learn about tricycle landing gear and its advantages and disadvantages when compared to tailwheel configurations. Understanding how they operate and the stresses they endure can help ensure safe takeoffs and landings."},{title: "Fuel, oil, and hydraulic systems", text: "Understanding how fuel and oil are controlled and operated properly in an aircraft can save you from a potential engine failure. Hydraulic systems are also critical, particularly in the brakes, to help ensure safe landings, because nobody wants to run off the end of the runway!"}, {title: "Electrical system", text: "The electrical system is connected to every device in the aircraft that uses power. From starting up the engine to keeping the PFD and MFD on, as well as charging up the batteries. Understaning potential malfunctions with this system is critical."}, {title: "Avionics", text: "Avionics refer to the electronic systems used on aircraft. For the 172S, we can generally think of the PFD and MFD, as well as the radios and navigation aids it provides as avionics."},{title: "Pitot-static, vacuum/pressure, and associated flight instruments", text: "These systems are what provide airspeed, altitude, and attitude information to a pilot. As with any system, it has limitations, and a full understanding of how these sytems work will prevent a loss of critical information in flight."},{title: "Environmental", text: "Unfortunately, the 172 doesn't have the best temperature control other than the air vents and a heater, but it is still important to understand how they function and their limitations."},{title: "Deicing and anti-icing", text: "Beyond understanding the potential dangers that icing causes, understanding how aircraft can protect themselves and the limitations of those protections is very important."}, {title: "Water rudders (only ASES OR AMES)", text: "Unfortunately we won't be going through this system in this lesson, as it is not relevant to ASEL pilots."}, {title: "Oxygen System", text: "While it is unlikely that you'll find a 172 with an oxygen system, it's important to know the requirements for different oxygen systems and the limitations and advantages of different types."}]},
        ]}, {
        drop: true, title: "Aircraft Controls", contents: [
            {title: "Primary Controls", contents: [
                {widget: "header", text: "Primary Flight Controls"},
                {widget: "text", text: "Comprised of ailerons, elevator, and rudder, all of the primary flight controls are required to operate an aircraft safely. Each primary control is utilized to move the aircraft around one of the three axes, as shown below: "},
                {widget: "image", caption: "The primary flight controls and the axes they control (lavionnaire.fr)", src: "http://www.lavionnaire.fr/SiteImgResAng/CessnaCompletAng.png"},
                {widget: "header", text: "Ailerons"},
                {widget: "text", text: "Ailerons are used to control the longitudinal axis of the aircraft by moving a surface located at the trailing edge of the outer wing. A series of cables and pulleys are used to connect them directly to the yoke in the 172S."},
                {widget: "image", caption: "Diagram of the aileron control system in the 172S (cfinotebook.net)", src: "https://www.cfinotebook.net/graphics/operation-of-aircraft-systems/flight-controls/aileron-system.webp"},
                {widget: "text", text: "By deflecting air up on one side of the aircraft and deflecting it down on the other, so moving the control wheel to the right would cause the right aileron to deflect upwards, and the left aileron to deflect downwards."},
                {widget: 'header2', text: "Adverse Yaw"},
                {widget: 'text', text: "Adverse yaw is a force generated by the downward deflected aileron producing more drag than the upward deflected aileron. Because the downard deflected aileron is producing more lift, it also produces more drag. The added drag on the downward deflected aileron causes that wing to slow down slightly, which will yaw the aircraft in the opposite direction of the turn. This is shown in the diagram below: "},
                {widget: "image", caption: "Adverse Yaw (PHAK Chapter 6)", src: "https://i.imgur.com/8YGQ6EP.png"},
                {widget: 'text', text: "The only way to propely counteract adverse yaw is to use the proper amount of rudder in the direction of the turn."},
            ]},
            {title: "Secondary Controls", contents: [
                {widget: "header", text: "Secondary Controls"}
            ]}
        ]},{
        drop: true, title: "Powerplant", contents: [
            {title: "Engine", contents: [
                {widget: "header", text: "Engine"}
            ]},
            {title: "Propeller", contents: [
                {widget: "header", text: "Propeller"}
            ]},
        ]}, {
        drop: true, title: "Liquids", contents: [
            {title: "Fuel", contents: [
                {widget: "header", text: "Fuel"}
            ]},
            {title: "Oil", contents: [
                {widget: "header", text: "Oil"}
            ]},
            {title: "Hydraulic Fluid", contents: [
                {widget: "header", text: "Hydraulic Fluid"}
            ]},
        ]}, {drop: false, title: "Electrical System", contents: [
            {widget: "header", text: "Electrical System"}
        ]}, {drop: true, title: "Avionics", contents: [
            {title: "Avionics", contents: [
                {widget: "header", text: "Avionics"}
            ]}, {title: "Autopilot", contents: [
                {widget: "header", text: "Autopilot"}
            ]}
        ]}, {drop: false, title: "Environmental Systems", contents: [
            {widget: 'header', text: "Environmental"}
        ]}, {drop: false, title: "Icing Equipment", contents: [
            {widget: 'header', text: "Icing"}
        ]}, {drop: false, title: "Oxygen Systems", contents: [
            {widget: 'header', text: "Oxygen Systems"}
        ]}
    ];
</script>

<LessonDisplay contents={systems} />