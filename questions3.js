const questions = [
  {
    "question": "105. What is the yellow arc (minimum caution range) for the fuel quantity?",
    "options": ["0 – 14 U.S. Gallons", "0 – 9 U.S. Gallons", "14 – 46 U.S. Gallons", "9 – 14 U.S. Gallons"],
    "correct": 0
  },
  {
    "question": "106. What is the green arc (normal range) for the fuel quantity?",
    "options": ["14 – 46 U.S. Gallons", "9 – 14 U.S. Gallons", "0 – 14 U.S. Gallons", "0 – 9 U.S. Gallons"],
    "correct": 0
  },
  {
    "question": "107. What is the overall range for Fuel Flow as indicated on the instrument?",
    "options": ["0 – 20 U.S. Gal/HR", "0 – 25 U.S. Gal/HR", "0 – 46 U.S. Gal/HR", "0 – 30 U.S. Gal/HR"],
    "correct": 3
  },
  {
    "question": "108. What is the overall range for Fuel Quantity as indicated on the instrument?",
    "options": ["0 – 30 U.S. Gallons", "0 – 9 U.S. Gallons", "0 – 14 U.S. Gallons", "0 – 46 U.S. Gallons"],
    "correct": 3
  },
  {
    "question": "109. What triggers a red warning message for an individual fuel tank?",
    "options": ["Sensed quantity in the tank is less than 1 gallon", "Sensed quantity in the tank is less than 9 gallons", "Sensed quantity in the tank is less than 5 gallons", "Sensed quantity in the tank is less than 14 gallons"],
    "correct": 0
  },
  {
    "question": "110. What triggers a red warning message for the fuel totalizer or total sensed quantity?",
    "options": ["Less than or equal to 14 gallons", "Less than 1 gallon", "Less than 5 gallons", "Less than 9 gallons"],
    "correct": 3
  },
  {
    "question": "111. What triggers an amber caution message for the fuel totalizer or total sensed quantity?",
    "options": ["Less than 9 gallons", "Less than 5 gallons", "Less than or equal to 14 gallons", "Less than 1 gallon"],
    "correct": 2
  },
  {
    "question": "112. What triggers a white advisory message for fuel imbalance?",
    "options": ["Imbalance between tanks is greater than 5 gallons", "Imbalance between tanks is greater than 8 gallons", "Imbalance between tanks is greater than 10 gallons", "Imbalance between tanks is greater than 12 gallons"],
    "correct": 1
  },
  {
    "question": "113. What triggers an amber caution message for fuel imbalance?",
    "options": ["Imbalance between tanks is greater than 10 gallons", "Imbalance between tanks is greater than 12 gallons", "Imbalance between tanks is greater than 8 gallons", "Imbalance between tanks is greater than 5 gallons"],
    "correct": 0
  },
  {
    "question": "114. What triggers a red warning message for fuel imbalance?",
    "options": ["Imbalance between tanks is greater than 5 gallons", "Imbalance between tanks is greater than 12 gallons", "Imbalance between tanks is greater than 8 gallons", "Imbalance between tanks is greater than 10 gallons"],
    "correct": 1
  },
  {
    "question": "115. What is the positive flight load factor limit for Flaps UP (0%) at 3600 lb?",
    "options": ["+1.9g", "+2.5g", "+3.8g", "0g"],
    "correct": 2
  },
  {
    "question": "116. What is the negative flight load factor limit for Flaps UP (0%) at 3600 lb?",
    "options": ["-2.5g", "-1.9g", "0g", "-3.8g"],
    "correct": 1
  },
  {
    "question": "117. What is the positive flight load factor limit for Flaps 50% at 3600 lb?",
    "options": ["0g", "+2.5g", "+3.8g", "+1.9g"],
    "correct": 3
  },
  {
    "question": "118. What is the negative flight load factor limit for Flaps 50% at 3600 lb?",
    "options": ["-1.9g", "-3.8g", "-2.5g", "0g"],
    "correct": 3
  },
  {
    "question": "119. What is the positive flight load factor limit for Flaps 100% (Down) at 3600 lb?",
    "options": ["+1.9g", "+2.5g", "0g", "+3.8g"],
    "correct": 0
  },
  {
    "question": "120. What is the negative flight load factor limit for Flaps 100% (Down) at 3600 lb?",
    "options": ["0g", "-1.9g", "-3.8g", "-2.5g"],
    "correct": 0
  },
  {
    "question": "121. Which geographic area is NOT authorized for navigation using the Perspective+ Integrated Avionics System?",
    "options": ["North of 70° South latitude", "North of 60° North latitude", "North of 70° North latitude (northern polar region)", "South of 50° South latitude"],
    "correct": 2
  },
  {
    "question": "122. Which area in Northern Canada is NOT authorized for navigation using the Perspective+ Integrated Avionics System?",
    "options": ["North of 65° North latitude between longitude 75°W and 120°W", "North of 70° North latitude between longitude 80°W and 130°W", "North of 55° North latitude between longitude 75°W and 120°W", "North of 60° North latitude between longitude 70°W and 110°W"],
    "correct": 0
  },
  {
    "question": "123. Which southern area is NOT authorized for navigation using the Perspective+ Integrated Avionics System?",
    "options": ["South of 70° South latitude (southern polar region)", "South of 65° South latitude", "South of 70° North latitude", "South of 60° South latitude"],
    "correct": 0
  },
  {
    "question": "124. Which region south of Australia and New Zealand is NOT authorized for navigation using the Perspective+ Integrated Avionics System?",
    "options": ["South of 60° South latitude between longitude 130°E and 170°E", "South of 55° South latitude between longitude 120°E and 165°E", "South of 65° South latitude between longitude 115°E and 160°E", "South of 50° South latitude between longitude 110°E and 155°E"],
    "correct": 1
  },
  {
    "question": "125. What is the length of the aircraft?",
    "options": ["24 ft", "28 ft", "26 ft", "30 ft"],
    "correct": 2
  },
  {
    "question": "126. What is the height of the aircraft?",
    "options": ["7.9 ft", "10.9 ft", "8.9 ft", "9.9 ft"],
    "correct": 2
  },
  {
    "question": "127. What is the wingspan of the aircraft?",
    "options": ["42.3 ft", "38.3 ft", "36.3 ft", "40.3 ft"],
    "correct": 1
  },
  {
    "question": "128. What is the length of the blades?",
    "options": ["80 inches", "78 inches", "76 inches", "82 inches"],
    "correct": 1
  },
  {
    "question": "129. What is the distance between the wheels?",
    "options": ["7.1 ft", "8.1 ft", "9.1 ft", "10.1 ft"],
    "correct": 2
  },
  {
    "question": "130. What is the propeller clearance?",
    "options": ["7 inches (18 cm)", "9 inches (23 cm)", "11 inches (28 cm)", "13 inches (33 cm)"],
    "correct": 1
  },
  {
    "question": "131. What is the turning radius for the wing tip?",
    "options": ["24.3 ft", "26.3 ft", "28.3 ft", "22.3 ft"],
    "correct": 0
  },
  {
    "question": "132. What is the rating for Alternator 1?",
    "options": ["70 amps, 28 volts", "100 amps, 28.75 volts", "100 amps, 28 volts", "70 amps, 28.75 volts"],
    "correct": 2
  },
  {
    "question": "133. What is the rating for Alternator 2?",
    "options": ["70 amps, 28 volts", "100 amps, 28 volts", "70 amps, 28.75 volts", "100 amps, 28.75 volts"],
    "correct": 2
  },
  {
    "question": "134. At what IAS would you expect to hear the stall horn when practicing power-off stalls with full flaps?",
    "options": ["64kts", "69kts", "74kts", "90kts"],
    "correct": 1
  },
  {
    "question": "135. What is the best way to pull the handle when activating the CAPS?",
    "options": ["One hand straight down", "Both hands straight down (chin up)", "Both hands straight up", "One hand sideways"],
    "correct": 1
  },
  {
    "question": "136. What happens to SR22 performance with a forward center of gravity (Fwd CG)?",
    "options": ["Stability decreases, sensitivity increases, stall speed & fuel use decrease", "Stability decreases, sensitivity increases, stall speed & fuel use increase", "Stability increases, sensitivity decreases, stall speed & fuel use decrease", "Stability increases, sensitivity decreases, stall speed & fuel use increase"],
    "correct": 3
  },
  {
    "question": "137. What happens to SR22 performance with an aft center of gravity (Aft CG)?",
    "options": ["Stability increases, sensitivity decreases, stall speed & fuel use decrease", "Stability decreases, sensitivity increases, stall speed & fuel use increase", "Stability decreases, sensitivity increases, stall speed & fuel use decrease", "Stability increases, sensitivity decreases, stall speed & fuel use increase"],
    "correct": 2
  },
  {
    "question": "138. What is the significance of VNE?",
    "options": ["Normal operating speed (176kts), can be exceeded with caution", "Minimum speed for safe operation", "Never exceed speed (205kts), cannot be exceeded", "Maximum speed for flap deployment"],
    "correct": 2
  },
  {
    "question": "139. What is the significance of VNO?",
    "options": ["Maximum speed for flap deployment", "Never exceed speed (205kts), cannot be exceeded", "Minimum speed for safe operation", "Normal operating speed (176kts), can be exceeded with caution"],
    "correct": 3
  },
  {
    "question": "140. How should you proceed if the engine fire persists after taking action?",
    "options": ["Ignore the fire", "Attempt to restart the engine", "Prepare for Emergency Ground Egress", "Increase throttle"],
    "correct": 2
  },
  {
    "question": "141. What is the range of the white arc on the airspeed indicator?",
    "options": ["205kts", "176kts–205kts", "74kts–176kts", "64kts–110kts"],
    "correct": 3
  },
  {
    "question": "142. What is the range of the green arc on the airspeed indicator?",
    "options": ["74kts–176kts", "64kts–110kts", "176kts–205kts", "205kts"],
    "correct": 0
  },
  {
    "question": "143. What is the range of the yellow arc on the airspeed indicator?",
    "options": ["205kts", "176kts–205kts", "74kts–176kts", "64kts–110kts"],
    "correct": 1
  },
  {
    "question": "144. What is the speed of the red arc on the airspeed indicator?",
    "options": ["64kts", "74kts", "176kts", "205kts"],
    "correct": 3
  },
  {
    "question": "145. When does the boost pump need to be in operation?",
    "options": ["Engine Start, Takeoff, Climb, Approach, Landing, and when switching tanks", "Only during Engine Start", "Only during Landing", "Only when switching tanks"],
    "correct": 0
  },
  {
    "question": "146. Is it advisable to unlatch the cabin doors with smoke or fumes in the cabin?",
    "options": ["Yes, it is done to ventilate the cabin from fumes/smoke", "Only if the aircraft is on the ground", "Only if the smoke is minimal", "No, it will make the situation worse"],
    "correct": 0
  },
  {
    "question": "147. How many fuel drain points are there in the aircraft?",
    "options": ["4 drain points", "5 drain points", "6 drain points", "3 drain points"],
    "correct": 1
  },
  {
    "question": "148. Where are the fuel drain points located in the aircraft?",
    "options": ["Collector Tank 1 and 2 only", "Main tank 1, Main tank 2, and Gascolator", "Main tank 1 and Gascolator only", "Main tank 1 and 2, Collector Tank 1 and 2, Gascolator"],
    "correct": 3
  },
  {
    "question": "149. What is the landing speed with flaps up according to the POH?",
    "options": ["75kts–80kts", "80kts–85kts", "90kts–95kts", "85kts–90kts"],
    "correct": 2
  },
  {
    "question": "150. What is the landing speed with flaps at 50% according to the POH?",
    "options": ["80kts–85kts", "90kts–95kts", "85kts–90kts", "75kts–80kts"],
    "correct": 2
  },
  {
    "question": "151. What is the landing speed with flaps at 100% according to the POH?",
    "options": ["75kts–80kts", "90kts–95kts", "80kts–85kts", "85kts–90kts"],
    "correct": 2
  },
  {
    "question": "152. In what situation would you use an emergency landing?",
    "options": ["If the landing gear fails to deploy", "If the engine is running smoothly", "If all attempts to restart the engine fail and a forced landing is imminent", "If the aircraft is low on fuel but the engine is operational"],
    "correct": 2
  },
  {
    "question": "153. What is the only approved and demonstrated method for spin recovery?",
    "options": ["CAPS deployment", "Apply opposite rudder and push forward on the yoke", "Reduce throttle and apply flaps", "Increase throttle and pull up"],
    "correct": 0
  },
  {
    "question": "154. What are the maximum cranking intervals for the starter?",
    "options": ["Crank for 20 seconds and wait for 40 seconds", "Crank for 15 seconds and wait for 30 seconds", "Crank for 5 seconds and wait for 10 seconds", "Crank for 10 seconds and wait for 20 seconds"],
    "correct": 3
  },
  {
    "question": "155. Is it true that directional control during taxi operation is best achieved by differential braking where full rudder authority is used before brakes are applied?",
    "options": ["True", "Only during crosswind conditions", "False", "Only when taxiing at high speeds"],
    "correct": 0
  },
  {
    "question": "156. Before you do your run-up, what oil temperature should you ensure is reached?",
    "options": ["125°F", "75°F", "50°F", "100°F"],
    "correct": 1
  },
];

