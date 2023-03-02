<script>
    import LessonDisplay from "../../../components/LessonDisplay.svelte";

    const systems = [
        {title: "Introduction", contents: [
            {widget: "header", text: "What exactly are systems?"},
            {widget: "text", text: "Aircraft systems are simply the devices used to operate an aircraft. These can range from the flight controls to the avionics or electrical system. For learning purposes, it can be easier to separate them into a few different broad categories. While this lesson will broadly cover the systems onboard a Cessna 172S, many other aircraft have more complex systems or entirely unique ones."},
            {widget: 'text', text: 'This lesson will start by going through the primary and secondary control systems, and then progress through the other, more complex, but equally important systems.'},
            {widget: 'header', text: 'What am I required to know?'},
            {widget: 'text', text: 'Regardless of the regulations or requirements, it is incredibly important to understand all of the systems in any aircraft that you fly. That being said, both the private and commercial ACS requires a person demonstrate an understanding of: '},
            {widget: 'accordion', items: [{title: "Primary flight controls", text: "The group of controls that are used to directly control the aircraft. Think of ailerons, elevator (or stabilator), and rudder. While these are not the only controls, primary controls are the controls that are required to safely control an aircraft."},{title: "Secondary flight controls", text: "Secondary flight controls are intended to improve the performance characteristics of the aircraft, or to relieve the control pressure required by the primary flight controls."},{title: "Powerplant and propeller", text: "The powerplant, or engine, combined with a propeller, is what produces thrust to propel an aircraft. Fully understanding how a propeller and powerplant operate is critical to the safety of flight."},{title: "Landing gear", text: "Although the 172 doesn't have retractable landing gear, there is still a lot of information to learn about tricycle landing gear and its advantages and disadvantages when compared to tailwheel configurations. Understanding how they operate and the stresses they endure can help ensure safe takeoffs and landings."},{title: "Fuel, oil, and hydraulic systems", text: "Understanding how fuel and oil are controlled and operated properly in an aircraft can save you from a potential engine failure. Hydraulic systems are also critical, particularly in the brakes, to help ensure safe landings, because nobody wants to run off the end of the runway!"}, {title: "Electrical system", text: "The electrical system is connected to every device in the aircraft that uses power. From starting up the engine to keeping the PFD and MFD on, as well as charging up the batteries. Understaning potential malfunctions with this system is critical."}, {title: "Avionics"},{title: "Pitot-static, vacuum/pressure, and associated flight instruments"},{title: "Environmental"},{title: "Deicing and anti-icing"}, {title: "Water rudders (only ASES OR AMES)"}, {title: "Oxygen System"}]},
        ]}, {
        title: "second onee", contents: [
            {widget: "header", text: "this is the second page boyyyy"},
            {widget: "text", text: 'this is the second page'}
        ]}
    ];
</script>

<LessonDisplay contents={systems} />