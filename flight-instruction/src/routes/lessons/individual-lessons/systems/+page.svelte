<script>
    import LessonDisplay from "../../../components/LessonDisplay.svelte";

    const systems = [
        {drop: false, title: "Introduction", contents: [
            {widget: "header", text: "What exactly are systems?"},
            {widget: "text", text: "Aircraft systems are simply the devices used to operate an aircraft. These can range from the flight controls to the avionics or electrical system. For learning purposes, it can be easier to separate them into a few different broad categories. While this lesson will broadly cover the systems onboard a Cessna 172S, many other aircraft have more complex systems or entirely unique ones."},
            {widget: 'text', text: 'This lesson will start by going through the primary and secondary control systems, and then progress through the other, more complex, but equally important systems.'},
            {widget: 'header', text: 'What am I required to know?'},
            {widget: 'text', text: 'Regardless of the regulations or requirements, it is incredibly important to understand all of the systems in any aircraft that you fly. That being said, both the private and commercial ACS (I. Preflight Inspection: Task G) requires a person demonstrate an understanding of: '},
            {widget: 'accordion', items: [{title: "Primary flight controls", text: "The group of controls that are used to directly control the aircraft. Think of ailerons, elevator (or stabilator), and rudder. While these are not the only controls, primary controls are the controls that are required to safely control an aircraft."},{title: "Secondary flight controls", text: "Secondary flight controls are intended to improve the performance characteristics of the aircraft, or to relieve the control pressure required by the primary flight controls."},{title: "Powerplant and propeller", text: "The powerplant, or engine, combined with a propeller, is what produces thrust to propel an aircraft. Fully understanding how a propeller and powerplant operate is critical to the safety of flight."},{title: "Landing gear", text: "Although the 172 doesn't have retractable landing gear, there is still a lot of information to learn about tricycle landing gear and its advantages and disadvantages when compared to tailwheel configurations. Understanding how they operate and the stresses they endure can help ensure safe takeoffs and landings."},{title: "Fuel, oil, and hydraulic systems", text: "Understanding how fuel and oil are controlled and operated properly in an aircraft can save you from a potential engine failure. Hydraulic systems are also critical, particularly in the brakes, to help ensure safe landings, because nobody wants to run off the end of the runway!"}, {title: "Electrical system", text: "The electrical system is connected to every device in the aircraft that uses power. From starting up the engine to keeping the PFD and MFD on, as well as charging up the batteries. Understaning potential malfunctions with this system is critical."}, {title: "Avionics", text: "Avionics refer to the electronic systems used on aircraft. For the 172S, we can generally think of the PFD and MFD, as well as the radios and navigation aids it provides as avionics."},{title: "Pitot-static, vacuum/pressure, and associated flight instruments", text: "These systems are what provide airspeed, altitude, and attitude information to a pilot. As with any system, it has limitations, and a full understanding of how these sytems work will prevent a loss of critical information in flight."},{title: "Environmental", text: "Unfortunately, the 172 doesn't have the best temperature control other than the air vents and a heater, but it is still important to understand how they function and their limitations."},{title: "Deicing and anti-icing", text: "Beyond understanding the potential dangers that icing causes, understanding how aircraft can protect themselves and the limitations of those protections is very important."}, {title: "Water rudders (only ASES OR AMES)", text: "Unfortunately we won't be going through this system in this lesson, as it is not relevant to ASEL pilots."}, {title: "Oxygen System", text: "While it is unlikely that you'll find a 172 with an oxygen system, it's important to know the requirements for different oxygen systems and the limitations and advantages of different types."}]},
        ]}, {
        drop: true, title: "Aircraft Controls", contents: [
            {title: "Primary Controls", contents: [
                {widget: "header", text: "Primary Flight Controls"},
                {widget: "text", text: "Comprised of ailerons, elevator, and rudder, all of the primary flight controls are required to operate an aircraft safely. Each primary control is utilized to move the aircraft around one of the three axes, as shown below: "},
                {widget: "image", caption: "The primary flight controls and the axes they control (lavionnaire.fr)", src: "http://www.lavionnaire.fr/SiteImgResAng/CessnaCompletAng.png"},
                {widget: "header", text: "Ailerons"},
                {widget: "text", text: "Ailerons are used to control the longitudinal axis of the aircraft by moving a surface located at the trailing edge of the outer wing. A series of cables and pulleys are used to connect them directly to the control wheel in the 172S."},
                {widget: "image", caption: "Diagram of the aileron control system in the 172S (cfinotebook.net)", src: "https://www.cfinotebook.net/graphics/operation-of-aircraft-systems/flight-controls/aileron-system.webp"},
                {widget: "text", text: "By deflecting air up on one side of the aircraft and deflecting it down on the other, the ailerons are able to control the roll of the aircraft. So moving the control wheel to the right would cause the right aileron to deflect upwards, and the left aileron to deflect downwards."},
                {widget: 'header2', text: "Adverse Yaw"},
                {widget: 'text', text: "Adverse yaw is a force generated by the downward deflected aileron producing more drag than the upward deflected aileron. Because the downard deflected aileron is producing more lift, it also produces more drag. The added drag on the downward deflected aileron causes that wing to slow down slightly, which will yaw the aircraft in the opposite direction of the turn. This is shown in the diagram below: "},
                {widget: "image", caption: "Adverse Yaw (PHAK Chapter 6)", src: "https://i.imgur.com/8YGQ6EP.png"},
                {widget: 'text', text: "The only way to propely counteract adverse yaw is to use the proper amount of rudder in the direction of the turn. It is also important to note that adverse yaw becomes more pronounced at low airspeeds."},
                header2("Types of Ailerons"),
                text("While the general concept of all ailerons are similar, there are a few different types that have distinct advantages, including reducing or eliminating adverse yaw."),
                header3("Differential Ailerons"),
                text("In a differential aileron system, one aileron is raised a greater distance compared to the down aileron. This causes an increase in drag on the descending wing, which reduces (but does not eliminate) adverse yaw."),
                image("Differential Ailerons","https://i.imgur.com/7lfLCIB.png"),
                text("The cessna 172 has differential ailerons. When the down aileron is deflected 15 degrees, the up aileron will be deflected 20 degrees, as stated in the POH."),
                header3("Coupled Ailerons and Rudder"),
                text("By using rudder-aileron interconnect springs, it is possible to deflect the rudder automatically when deflecting the ailerons. Important to note, however, that the rudders can be overpowered when necessary to skid or slip the aircraft."),
                image ("Coupled Ailerons and Rudder (PHAK Chapter 6)","https://i.imgur.com/HHSJnfN.png"),
                header3("Flaperons"),
                text("Flaperons combine both aspects of flaps and ailerons. The surfaces can be lowered simultaneously to act as flaps when needed, but are still able to operate fully as ailerons. This is accomplished by using a mixer that combines the serparate inputs into one movement."),
                image("Flaperons", "https://i.imgur.com/u4jkYio.png"),
                header3("Frise-Type Ailerons"),
                text("When pressure is applied to the control wheel, the aileron that is being raised pivots on an offset hinge, projecting the leading edge of the aileron into the airflow and creating drag. This helps to equalize the drag created by the lowered aileron. Additionally, the frise-type aileron forms a slot so that air can flow smoothly over the lowered aileron, making it more effective at high angles of attack."),
                image("Frise-Type Aileron (PHAK Chapter 6)", "https://i.imgur.com/klfdHTt.png"),
                header1("Elevator"),
                text("The elevator is used to control the aircraft's rotation about the lateral axis (pitch). In the 172, the elevator is connected to the control column by a series of mechanical linkages, which is shown below:"),
                image("172 Elevator Control System (cfinotebook.net)", "https://www.cfinotebook.net/graphics/operation-of-aircraft-systems/flight-controls/elevator-system.webp"),
                text("It is important to understand that the elevator functions by generating lift either upwards or downwards. When pulling the control wheel back, you decrease the camber of the elevator and create a downward aerodynamic force that is greater than the normal tail-down force that exists in straight and level flight. This is what causes the nost to pitch up."),
                image("Downward aerodynamic force of the elevator (PHAK Chapter 6)", "https://i.imgur.com/hBZm6HR.png"),
                text("Another important note: the elevator will always rotate the aircraft around the center of gravity."),
            ]},
            {title: "Secondary Controls", contents: [
                {widget: "header", text: "Secondary Controls"}
            ]}
        ]},{
        drop: true, title: "Powerplant", contents: [
            {title: "Engine", contents: [
                {widget: "header", text: "Powerplant... or Engine?"},
                text("The engine, generally referred to as the powerplant, is what produces thrust to propel an aircraft. Reciprocating and turboprop engines both work with a propeller to produce thrust, while turbojet and turbofan engines produce thrust by increasing the velocity of air flowing through the engine. It is important to note that the general convention is to refer to an aircraft engine as a powerplant, although they are often times used interchangeably. This is due to the fact that the engine is what provides electrical power to the aircraft. For this lesson, we'll focus mainly on reciprocating engines, as that is what is in the 172."),
                header1("Reciprocating Engines"),
                text("Most small aircraft use reciprocating engines, which operate on the basic principle of converting chemical energy (fuel) into mechanical energy. This conversion occurs within the cylinders of the engine through combustion."),
                image("4 Stroke Engine Airflow", "https://upload.wikimedia.org/wikipedia/commons/d/d7/4-Stroke-Engine-with-airflows.gif"),
                text("The graphic above may look complicated, but we can break it down to understand the prupose. The goal of this engine, and most aircraft engines, is to turn the fuel that we have into rotational energy that can turn the propeller. Let's take a look at the individual components."),
                image("Components of a reciprocating engine (PHAK Chapter 7)", "https://i.imgur.com/aY3BFgW.png"),
                {widget: "accordion", expanded: true, items: [
                    {title: "Cylinder", text: "The space in which a piston travels. The piston is seated inside of the cylinder and moves up and down."},
                    {title: "Intake Valve", text: "A valve that is opened at the correct time to allow the fuel air mixture to enter into the cylingder. Generally the intake valve is opened just before the piston reaches top dead center, meaning that the piston is at the top of the cylinder."},
                    {title: "Exhaust Valve", text: "A valve that is opened to allow the exhaust fumes from combustion to exit the cylinder."},
                    {title: "Piston", text: "The circular device that slides up and down the cylinder, allowing it to compress the fuel air mixture, or to push out exhaust gasses."},
                    {title: "Spark Plug", text: "What initiates the combustion. By creating a spark using electricty, the spark plug ignites the fuel air mixutre and forces the piston down to the bottom of the cylinder."},
                    {title: "Connecting Rod", text: "What connects the piston to the crankshaft. As the piston moves up and down, the connecting rod pushes and rotates the crankshaft."},
                    {title: "Crankshaft", text: "The crankshaft is what converts the linear motion of the piston into rotational motion."},
                    {title: "Crankcase", text: "The crankcase is what houses the entire crankshaft. Can be thought of as the main component of the engine, where all of the work is done."},
                ]},
                header2("Four Stroke Engines"),
                text('Nearly all aviation reciprocating engines are four stroke engines. We can think of a stroke as a step that the engine takes, and in a four stroke engine those steps are intake, compression, power (or ignition), and exhaust (A good way to remember this is "Suck Squeeze Bang Blow").'),
                image("The stages of a four stroke engine", "https://cdn2.picryl.com/photo/2020/03/23/stroke-psf-fd2876-1024.png"),
                header3("Intake"),
                text(" The intake stroke begins as the piston starts its downward travel. When this happens, the intake valve opens and the fuel-air mixture is drawn into the cylinder."),
                header3("Compression"),
                text("The compression stroke begins when the intake valve closes, and the piston starts moving back to the top of the cylinder. This phase of the cycle is used to obtain a much greater power output from the fuel-air mixture once it is ignited. "),
                header3("Power"),
                text("The power stroke begins when the fuel-air mixture is ignited. This causes a tremendous pressure increase in the cylinder and forces the piston downward away from the cylinder head, creating the power that turns the crankshaft. "),
                header3("Exhaust"),
                text("The exhaust stroke is used to purge the cylinder of burned gases. It begins when the exhaust valve opens, and the piston starts to move toward the cylinder head once again. "),
                header3("Video Explanation"),
                text("Watch the beginning of this video explaining the four strokes of an engine. This explanation is focused on a car engine, but the concept is the same."),
                youtube("https://www.youtube.com/embed/ZQvfHyfgBtA?start=14"),
                header2("Horizontally opposed engines"),
                text("The most common type of engine found in small aircraft is the horizontally opposed engine. These engine always have an even number of cylinders, which face in opposite directions. They are generally air cooled. Using this design allows for a higher power to weight ratio as the crankshaft can be smaller. Below is a depiction of a horizontally opposed engine:"),
                image("Depiction of a horizontall opposed engine (PHAK Chapter 7)", "https://i.imgur.com/p7jIfD8.png"),
                header2("The 172S Engine"),
                text("While there can be a variety of different engines installed in the 172, all of ours are fitted with the Lyoming IO-360-L2A. It's important to note that the name of the engine can be thought of as a code to make it easier to remember the different components. I: fuel injected, O: horizontally opposed, 360: 360 cubic inches of displacement. Displacement here can be understood as the total amount of volume that all of the cylinders combined make up."),
            ]}, 
            {title: "Propeller", contents: [
                {widget: "header", text: "The Propeller - Just Another Airfoil"},
                text("It may be obvious that the propeller is what drives the aircraft forward and produces the thrust necessary for flight. But it is important to remember that the propeller does this in the same way that a wing generates lift. To fully comprehend how a propeller works, requires an understanding that a propeller in essence is a rotating wing that is subject to the same lift theories that govern a wing. The amount of thrust produced, therefore, depends on the propeller's angle of attack, and RPM"),
                header1("Propeller Pitch"),
                text("Propellers are twisted to have a high angle of incidence at the hub, which tapers out to a low angle at the tip. The reason for this is due to the fact that the speed of the propeller is much faster at the wing tip, as shown below:"),
                image("Speed Changes Along Propeller (PHAK Chapter 7)", "https://i.imgur.com/15rqiid.png"),
                text("As there is an increase in speed along the length of the propeller, tapering the angle of the propeller as it goes further out allows for the a uniform amount of thrust to be generated by maintaining a constant angle of attack."),
                image("Changes in Propeller Angle (PHAK Chapter 7)", "https://i.imgur.com/0y82Zwi.png"),
                header2("Fixed-Pitch Propeller"),
                text("The 172 has a fixed-pitch propeller. This simply means that the pitch of the propeller is set by the manufacturer and cannot be changed. This means that for a given fixed-pitch propeller, the amount of thrust can be directly related to a combination of airspeed and rpm."),
                header3("Types of Fixed-Pitch Propellers"),
                text("The two types of Fixed-Pitch propellers are climb propellers and cruise propellers. Climb propellers are designed with a lower angle of incidence, and therefore less drag, which results in higher rpm and more horsepower capability. Cruise propellers, on the other hand, have a higher pitch, and therefore more drag. This decreases climb and takeoff performance, but increases efficiency during cruise flight."),
                header2("Adjustable-Pitch Propeller"),
                text("The forerunner of what is now referred to as the constant speed propeller, these propellers allow a pilot to change the pitch of the propeller on the ground, but not in flight. These can be referred to as a ground-adjustable propeller."),
                header3("Constant-Speed Propeller"),
                text("A propeller that allows for changes in propeller pitch during flight. A governor maintains a constant rpm, and changes the pitch of the propeller to maintain that rpm. We won't go into detail on these types of propellers, but they are important to know about and fully understand before flying a plane that has one."),
                header1("The 172S Propeller"),
                text("Our 172s have a 76 inch diameter fixed-pitch propeller. The propeller is connected directly to the crankshaft, meaning that the propeller rpm is always equal to the engine rpm.")
            ]}, 
            {title: "Ignition", contents: [
                header1("The Ignition System"),
                text("In a spark ignition engine, the ignition system provides a spark that ignites the fuel-air mixture in the cylinders. This system is made up of magnetos, spark plugs, high-tension leads, and an ignition switch."),
                header1("Magnetos"),
                text("The magneto uses a permanent magnet to generate an electrical current, independent of the electrical system, which generates a high enough voltage to jump a spark across the spark plug gap in each cylinder. See the video below for more information:"),
                youtube("https://www.youtube.com/embed/P5JWuYvf1Jk?start=14"),
                text("Most aircraft have two separate magnetos, each connected to its own spark plug in each cylinder. This ensures that in the case of one magneto or spark plug failing, the engine can still operate. The firing of two spark plugs also improves combustion and results in a slightly higher power output."),
                image("Magnetos and Connection to Spark Plugs (PHAK Chapter 7)", "https://i.imgur.com/BweV4oO.png"),
                text("This is the reason for the magneto check during the run up. It is imperative to check that both sets of magnetos and spark plugs are operating, and the normal drop in rpm is due to the less complete combustion from just one spark plug."),
                header2("Impusle Coupling"),
                text("A mechanism that sits between the magneto's drive shaft and the engine's accessory drive. This device is used as a way to generate sufficient current for the spark plugs during engine startup. The impulse coupling intensifies the spark at slow engine speeds by using a spring loaded flyweight in one magneto which winds up and quickly accelerates to generate the proper current. It also has the effect of delaying the spark slightly so that it fires directly at top dead center, rather than slightly before during normal engine operation. See the video below for more information:"),
                youtube("https://www.youtube.com/embed/DAntiSOgh5k"),
                header1("Spark Plugs"),
                text("A spark plug ignites when a high voltage is applied between the center and ground electrode, which breaks down the insulation between the electrodes and generates a spark. The magnetos provide this voltage at the correct time, which allows the fuel air mixture to ignite. High-voltage leads are what connect the spark plug to the magneto."),
                image("Spark Plug Diagram", "https://static.summitracing.com/global/images/FAQs/5075/Spark%20Plug%20Anatomy.png"),
            ]}, 
            {title: "Starter", contents: [
                header1("Starting The Engine"),
                text("The starter is a system on the aircraft designed to use electrical power from the batteries to rotate the engine at a speed high enough allow for combustion. The system consists of a source of electricity (battery), wiring, switches, and solenoids to operate the starter and starter motor. See the video below for a visual explanation:"),
                youtube("https://www.youtube.com/embed/kFsl5r34lCI"),
                header2("Why use a solenoid?"),
                text("Rather than provide power directly to the starter motor, the ignition switch is wired through a solenoid that transfers that power to the motor. This is because the power required by the starter motor is large, and conncting the starter directly to it would require a large switch and heavily insulated wiring. Another advantage of the solenoid is the linear motion it produces when engaged. When supplied with power, the core of the solenoid shifts back, and since it is connected to the pinion, this allows it to push the pinion forward and lock with the flywheel."),
                header2("The Pinion"),
                text("The pinion is what connects to the flywheel and allows it to rotate the engine to a sufficient rpm for starting. It uses a helical gear to rotate it slightly as it engages on the flywheel to mesh smoothly and prevent any possible damage. In addition to this, a one way clutch is used to ensure that the starter motor is not oversped when the engine starts running."),
            ]},
        ]}, {
        drop: true, title: "Liquids", contents: [
            {title: "Fuel", contents: [
                {widget: "header", text: "Fuel System"},
                text("The fuel system comprises of all the components handling the fuel going from the tanks into the cylinders. While it may seem complex, if we break it down into its individual components it becomes more clear. Displayed below is a diagram of the 172S fuel system:"),
                image("Diagram of the Fuel System", "https://i.imgur.com/SKZCXhq.png"),
                header2("Fuel Tanks"),
                text("The 172S has two fuel tanks, located in either wing. Each has a total capacity of 28 gallons, or 56 gallons in total. However, due to the design of the tanks, only 26 gallons is actually usable, making the total usable capacity of the fuel tanks 53 gallons."),
                text('Each tank is connected to 5 drains, which are located on the underside of the wing. Those are the "sumps" that are used to visually inspect the fuel during preflight.'),
                text("Each tank is also connected to a fuel quantity transmitter, which is an electrical quantity gauge that measures the approximate quantity of fuel in the tank by using a float."),
                header2("Selector Valve"),
                text("The selector valve is located inside of the cockpit, and controls the tank from which fuel is drawn into the system. You can either draw from one tank, or both. It also has a drain valve connected to it, which is located below the fuselage."),
                header2("Fuel Reservoir Tank"),
                text("The reservoir tank is a small tank that collects the fuel from the fuel selector. It is also connected to a fuel return which allows the fuel/air control unit to return excess fuel back into the tank if it is not needed immediatly."),
                header2("Fuel Pumps"),
                text("The 172S has both an engine driven fuel pump and an electric switch activated auxilary fuel pump. The auxilary fuel pump is mainly used when priming the engine, as the engine drive fuel pump only runs when the engine is running. However, it can also be used if the engine drive fuel pump malfunctions."),
                text("It is also important to note that gravity alone can provide fuel pressure, but it is required in high wing aircraft that the fuel flow of a gravity system must be able to provide at least 150% of the takeoff fuel consumption of the engine (FAR 23.955)."),
                header2("Fuel Shutoff Valve"),
                text("The fuel shutoff valve is located in the cockpit and allows for all fuel to be stopped before reaching the fuel strainer in the case of an emergency."),
                header2("Fiel Strainer"),
                text("The fuel strainer is used to remove sediment from the fuel, and ensure that none of it is going into the engine. It is connected to a drain valve to check that there is fuel flowing through it and to make sure clean fuel is coming out."),
                header2("Fuel/Air Control Unit"),
                text("The control unit acts as a computer to determine the amount of fuel needed to deliver the power requested. When you set a certain throttle and mixture setting, the fuel/air control unit provides the correct amount of fuel required."),
                header2("Fuel Return"),
                text("The fuel return line connects from the fuel/air control unit to the reservoir tank to allow for excess fuel to be returned and reused in the fuel system. A check valve is included in the line to prevent fuel from flowing in the opposite direction"),
                header2("Fuel Distribution Valve"),
                text("This valve equally distributes the fuel into each cylinder. This allows for a more uniform fuel-air ratio in each cylinder when compared to a carburated engine."),
                header1("Avgas"),
                text("100 Low Lead, colloquially referred to as avgas, is a specific fuel designed for piston aircraft. The 172S uses 100LL."),
                header2("Identifying 100LL"),
                text("Refueling facilities will mark 100LL with a plate that reads AVGAS in white letters against a red background, preceded by a vertical bar in light blue. Additionally, 100LL will have a blue tint from additives, which allow a pilot to check their fuel before flight and ensure they are using the correct fuel type."),
            ]},
            {title: "Oil", contents: [
                header1("The Purpose of Oil"),
                text("Oil has a wide variety of uses in engines, but they all fall into the categories of: cooling, librication, sealing, and cleaning."),
                text("Cooling: the movement of oil throughout the engine allows the oil to absorb heat generated by different components and dissapate it. Although the 172S has an air-cooled engine, oil still helps in the process of reducing engine heat."),
                text("Lubrication: oil provides critical lubrication to a variety of engine components. Without oil, the friction of components rubbing against each other would quickly destroy an engine."),
                text("Sealing: oil protects engine components against the ingress of dirt and foreign matter, which helps the engine run smoothly"),
                text("Cleaning: oil helps to clean the engine by dissolving deposits as it circulates through the engine."),
                {widget: "header", text: "Wet Sump Oil Systems"},
                text("A wet sump oil system uses a crankcase sump as an oil reservoir. Below we can see a simple description of the path that oil takes in the oil system as well as a diagram of a wet sump system in an airplane engine:"),
                image("Oil System Diagram (Acronym: SSPCFE)", "https://i.imgur.com/OJnsfcu.png"),
                image("Wet-Sump Oil System", "https://i.imgur.com/Kz0jIMM.png"),
                header2("Sump"),
                text("A reservoir of oil that is used as a tank to hold the oil before it is flushed through the system. The sump ensures that there is an adequate supply of oil that can be provided into the system at all times."),
                header2("Strainer"),
                text("The strainer removes debris from the oil and makes sure that it is clean before entering the system. It is important to note that if the strainer becomes blocked, there is a bypass that can take it directly into the engine to avoid major damage to the engine."),
                header2("Pump"),
                text("The pump is what pushes the oil through the system. It is also connected to a bypass line that can pass the oil straight to the filter, skipping the cooler, if the oil is not yet hot."),
                header2("Filter"),
                text("The filter helps to remove contaminants from the oil that can accumulate over time. Without the filter, the oil could become saturated with tiny, hard particles that can wear down the surfaces of the engine."),
                header1("Oil Indicators"),
                text("Both the oil temperature and oil pressure are required to be indicated in the cockpit. On the G1000, the oil pressure gauge will have a green region where the oil pressure should be. Oil pressure falling outside of this range could be dangerous and cause engine damage or an engine failure. Also, excessively hot oil temperatures are an indication that the system is not working properly or that the engine is overheating."),
            ]},
            {title: "Hydraulic Fluid", contents: [
                {widget: "header", text: "Hydraulic Fluid"},
                text("Hydraulic fluid utilises the relatively simple concept that many liquids resist compression. This allows certain devices, such as the brakes, to be operated with a much simpler system."),
                header2("The Brakes"),
                text("The brakes use friction generated from pressure of the brake pads rubbing against the disks. The pads are hydraulically connected to the pedals, which allows for direct control of the brakes. A spring inside of the hydraulic cylinder allows for the brakes to be released when the brakes are no longer pressed. Below is a simplified diagram of the system:"),
                image("Diagram of disk brakes using hydrailic fluid to actuate them", "https://upload.wikimedia.org/wikipedia/commons/4/47/Hydraulic_disc_brake_diagram.gif"),
                text("Checking the proper function of the brakes before any flight is critical. During preflight, this consists of checking the brake disks and pads, as well as the hydraulic lines connected to them. Remember that the hydraulic fluid on the 172 is colored red, so any amount of red fluid found on or near the brakes is a sign of a leak and the system neeeds to be investigated. The video below gives more information on the braking system specific to the 172:"),
                youtube("https://www.youtube.com/embed/M1UddxRAjbc"),

            ]},
        ]}, {drop: false, title: "Electrical System", contents: [
            {widget: "header", text: "Electrical System"},
            text("The 172S has a 28 volt direct current system that powers all of the electrical components on the aircraft. An alternator, combined with a main and standby battery, both 24 volts, power electricity can be provided without the use of the alternator. While this system may seem complex, we can break it down into a few categories to aid in understanding the system. Below is a great interactive depiction of the electrical system in the 172S:"),
            {widget: "link", text: "UND Interactive Electrical System Demonstration", src: "https://mediafiles.aero.und.edu/aero.und.edu/aviation/trainers/c172s-electrical-system/"},
            header2("Alternator"),
            text("Alternators generate electric current based on the principle of magnetic induction. An electromagnet (rotor) spins inside multiple windings of a conductor (stator) which generates an alternating current inside of the conductor from the varying north-south lines of magnetic force. Below is a general depiction of the conecpt: "),
            image("Alternating Current Generation Inside of Alternator", "https://upload.wikimedia.org/wikipedia/commons/0/06/Flux_switching_alternator.gif"),
            header3("Alternating Current to Direct Current"),
            text("The alternating current generated, however, needs to be converted to direct current for use in the system. This is accomplished by using a series of diodes (rectifiers) that allow current to flow in one direction but not the other. A simple description of a rectifier is shown below:"),
            youtube("https://www.youtube.com/embed/5cbQNfO0Mwg"),
            header3("Alternator Control Unit"),
            text("The alternator control unit is what allows the alternator to output a consistent voltage. Without it, the voltage ouput would be directly related to engine rpm. Instead, a voltage regulator controls the strength of the rotor electromagnetic, which in turn provides the correct voltage ouput. The voltage regulator compares the output voltage from the alternator with a reference voltage and adjusts the current supplied to the rotor."),
            
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





    function text(text) {
        return {widget: 'text', text: text};
    }
    function header1(text) {
        return {widget: 'header', text: text};
    }
    function header2(text) {
        return {widget: 'header2', text: text};
    }
    function header3(text) {
        return {widget: 'header3', text: text};
    }
    function image(caption, src) {
        return {widget: 'image', src: src, caption: caption};
    }
    function youtube(src) {
        return {widget: 'youtube', src: src};
    }


<<<<<<< HEAD

    //add propeller pitch explanation using jello
    //add camshaft to engine lesson
=======
    //add type of oil used in 172
>>>>>>> refs/remotes/origin/main
</script>

<LessonDisplay contents={systems} />