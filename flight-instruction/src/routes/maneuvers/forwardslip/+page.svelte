<script>
	import FirestoreLessonConstructor from "../../components/FirestoreLessonConstructor.svelte";

    let contents = [
        ["heading", "Forward Slip to a Landing"],
        ["text", "The forward slip is an incredibly important maneuver that allows a pilot to quickly lose altitude when needed, such as when high on final approach, especially when the option to go around is not available (i.e. during an engine failure forced landing). Learning it, however, requires delicate use of the controls, so it's important to know how to do it correctly."],
        ["heading2", "Completion Standards"],
        ["text", "Forward Slips to a landing only appear in the private pilot ACS, however knowledge of them and the ability to execute them is included in the commercial ACS under the Power-Off 180 maneuver. Below are the private pilot ACS completion standards: "],
        ["heading3", "Objective"],
        ["text", "To determine that the applicant exhibits satisfactory knowledge, risk management, and skills associated with a forward slip to a landing."],
        ["heading3", "Knowledge"],
        ["list", [
            "Concepts of energy management during a forward slip approach",
            "Effects of atmospheric conditions, including wind, on approach and landing performance",
            "Wind correction techniques during forward slip",
            "When and why a forward slip approach is used during an approach",
        ]],
        ["heading3", "Risk Management"],
        ["list", [
            "Selection of runway or approach path and touchdown area based on pilot capability, airplane performance and limitations, available distance, and wind",
            "Effects of crosswind, windshear, tailwind, wake turbulence, and landing surface/condition",
            "Planning for Go-around/rejected landing and land and hold short operations (LAHSO)",
            "Collision hazards, to include aircraft, terrain, obstacles, wires, vehicles, vessels, persons, and wildlife",
            "Low altitude maneuvering including stall, spin, or CFIT",
            "Distractions, loss of situational awareness, or improper task management",
            "Forward slip operations, including fuel flowage, tail stalls with flaps, and lack of airspeed control",
            "Surface contact with the airplane’s longitudinal axis misaligned",
            "Unstable approach",
        ]],
        ["heading3", "Skills"],
        ["list", [
            "Complete the appropriate checklist",
            "Make radio calls as appropriate",
            "Plan and follow a flightpath to the selected landing area considering altitude, wind terrain, and obstructions",
            "Select the most suitable touchdown point based on wind, landing surface, obstructions and airplane limitations",
            "Position airplane on downwind leg, parallel to landing runway",
            "Configure the airplane correctly",
            "As necessary, correlate crosswind with direction of forward slip and transition to sideslip before touchdown",
            "Touch down at a proper pitch attitude, within 400 feet beyond or on the specified point, with no side drift, and with the airplane’s longitudinal axis aligned with and over the runway center/landing path",
            "Maintain a ground track aligned with the runway center/landing path",
        ]],
        ["heading2", "What is a Forward Slip?"],
        ["text", "It is well known, and hopefully well taught, that slipping an airplane reduces overall performance, especially in a turn. However, there are a few times when we can use this performance reduction to our advantage. Understanding how to properly execute a forward slip can not only be a great tool in rapidly losing altitude, but can also aid in understanding why unintentional slips are so harmful."],
        ["text", "To put it simply, a forward slip is executed by using opposite aileron and rudder deflections to rapidly lose altitude when needed without gaining airspeed. This can be especially useful when high on final approach, where simply increasing the descent rate will lead to an airspeed that is too high."],
        ["heading2", "Executing a Forward Slip"],
        ["text","By using opposite aileron and rudder, we are able to position the fuselage of the aircraft diagonal to the relative wind. This, essentially, turns the body of the airplane into an airbrake. This results in a large increase in drag, a diagram of a forward slip as it relates to relative wind is shown below: "],
        ["image", "https://i.imgur.com/TuVWlpz.png"],
        ["text","To enter a forward slip, firmly and equally apply opposite control pressures on the ailerons and rudder while simultaneously reducing pitch with the elevator. Remember that we are dramatically increasing drag, which means that our airspeed will have to be maintained with forward elevator."],
        ["heading3","Which Direction to Slip?"],
        ["text","Banking into the wind will be most effective during a forward slip. This will allow for the greatest angle between the fuselage and the relative wind."],
        ["heading3","Airspeed Indications"],
        ["text","Per the Cessna 172S POH, left slips can cause an airspeed indication up to 20 knots below actual airspeed, while right slips can cause an airspeed indication up to 5 knots above actual airspeed. This has to do with the disruption of airflow caused by the fuselage over the pitot tube, and should be carefully monitored. Remember that a forward slip is an uncoordinated maneuver, so any stall that occurs from them could lead to a spin, which is especially dangerous at low altitude where the maneuver is performed."],
        ["heading3","Fuel Concerns"],
        ["text","The 172S POH gives specific instructions on performing slips with different fuel quantities and tank selections. The fuel selector should be selected to BOTH before commencing a slip. Additionally, when operating with one empty fuel tank, or when the tanks are 1/4 or less, uncoordinated flight should be restricted to 30 seconds or less. This is because the fuel tank outlets can become uncovered and cause fuel starvation."],
        ["heading3","Exiting a Slip"],
        ["text","This comes down to your specific situation. We can generally say that a slip should be exited once you have attained a reasonable glidepath, but keep in mind that if you do not reach that point by 300 feet AGL, you should go around."],
        ["heading","Common Errors"],
        ["text","Below are some common errors listed in the Airplane Flying Handbook:"],
        ["list",[
            "Incorrect pitch adjustments that result in poor airspeed control",
            "Reacting to erroneous airspeed indications",
            "Using excess power while trying to lose altitude",
            "A slip in the same direction as any crosswind",
            "Poor glidepath control",
            "Late transition to a sideslip during landing with crosswinds",
            "Landing without the longitudinal axis parallel to runway",
            "Landing off the centerline",
        ]],
        ["",""],
    ];

    //add aileron into wind to maintain same controls for slip on touchdown
    //add airspeed indication clarification on direction of slip (rudder/aileron input)
        //add that airspeed indications are because of static port changes as well
    //change fuel tank outlet information and how fuel starvation can occur
    //correct airspeed indications spelling
</script>

<FirestoreLessonConstructor contents={contents}></FirestoreLessonConstructor>