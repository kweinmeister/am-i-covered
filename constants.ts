
import { Policy, PolicyType } from './types';
import CarIcon from './components/icons/CarIcon';
import HomeIcon from './components/icons/HomeIcon';
import ApartmentIcon from './components/icons/ApartmentIcon';

export const POLICIES_DATA: Policy[] = [
  {
    type: PolicyType.AUTO,
    displayName: "Auto Insurance",
    icon: CarIcon,
    scenarios: [
      {
        id: "auto-parking-lot",
        title: "My car was hit in a parking lot while I was shopping.",
        description: "If you have collision coverage, it typically helps pay to repair or replace your car if it's damaged in an accident with another vehicle or object, regardless of who's at fault. If the other driver is identified and at fault, their liability coverage might pay.",
        deductibleInfo: "Your collision coverage usually has a deductible, which is the amount you pay out of pocket before your insurance coverage kicks in. For example, if your deductible is $500 and the repair cost is $2000, you pay $500, and your insurance covers the remaining $1500.",
        nextSteps: [
          "Document the scene: Take photos of the damage to both vehicles and the surrounding area.",
          "Exchange information if the other driver is present (name, contact, insurance). If it's a hit-and-run, note any details you observed.",
          "File a police report, especially if there's significant damage or it's a hit-and-run.",
          "Contact your insurance company promptly to report the claim.",
        ],
      },
      {
        id: "auto-stolen",
        title: "My car was stolen.",
        description: "Comprehensive coverage typically helps pay to replace your stolen car or repair damage from theft or attempted theft. This coverage is usually optional unless required by your lease or loan.",
        deductibleInfo: "Similar to collision, comprehensive coverage also has a deductible. This is the amount you'll pay before your insurance covers the value of your car (up to its actual cash value) or repair costs.",
        nextSteps: [
          "Report the theft to the police immediately. They'll issue a report which your insurer will need.",
          "Contact your insurance company to file a claim. Provide them with the police report number.",
          "Notify your financing or leasing company if applicable.",
          "Prepare information about your car (VIN, make, model, year, mileage).",
        ],
      },
      {
        id: "auto-at-fault",
        title: "I was in an at-fault accident.",
        description: "Liability coverage (bodily injury and property damage) helps pay for the other person's medical expenses and vehicle repairs if you're at fault. Collision coverage (if you have it) helps pay for your own car's repairs.",
        deductibleInfo: "Your collision coverage will have a deductible for your car's repairs. Your liability coverage doesn't have a deductible for claims made against you by others.",
        nextSteps: [
          "Ensure everyone is safe. Call for medical help if needed.",
          "Move vehicles to a safe location if possible.",
          "Exchange information with the other driver(s).",
          "Document the scene (photos, witness info). Do not admit fault.",
          "Report the accident to your insurance company.",
        ],
      },
    ],
  },
  {
    type: PolicyType.HOME,
    displayName: "Homeowners Insurance",
    icon: HomeIcon,
    scenarios: [
      {
        id: "home-tree-fall",
        title: "A tree fell on my roof during a storm.",
        description: "Dwelling coverage (Coverage A) in your homeowners policy typically helps pay to repair damage to your home's structure, including the roof, from perils like windstorms. Debris removal may also be covered.",
        deductibleInfo: "Your homeowners policy has a deductible (e.g., $1000, $2500, or a percentage of your dwelling coverage). This is the amount you pay before insurance covers the rest of the repair costs.",
        nextSteps: [
          "Prioritize safety. If the home is unsafe, evacuate.",
          "Take photos/videos of the damage before making any temporary repairs.",
          "Make temporary repairs to prevent further damage (e.g., cover the hole with a tarp). Keep receipts.",
          "Contact your insurance company to start the claims process.",
          "Get estimates from reputable contractors for permanent repairs.",
        ],
      },
      {
        id: "home-burst-pipe",
        title: "My basement flooded due to a burst pipe.",
        description: "Homeowners insurance usually covers sudden and accidental water damage from a burst pipe, including repairs to your home and damaged personal property. However, damage from gradual leaks or lack of maintenance may not be covered. Flood damage from external sources (like heavy rain or overflowing rivers) requires a separate flood insurance policy.",
        deductibleInfo: "Your standard homeowners deductible applies. You'll pay this amount for covered repairs and replacements before your policy pays.",
        nextSteps: [
          "Shut off the main water supply if you can safely do so.",
          "Remove standing water as quickly as possible to mitigate damage.",
          "Document all damage with photos and videos.",
          "Notify your insurance agent or company immediately.",
          "Keep damaged items until your adjuster has inspected them (if possible).",
        ],
      },
      {
        id: "home-guest-slip",
        title: "A guest slipped and fell in my kitchen.",
        description: "Personal liability coverage (Coverage E) in your homeowners policy can help pay for medical expenses if a guest is injured on your property and you're found legally responsible. It may also cover legal defense costs.",
        deductibleInfo: "Liability coverage typically does not have a deductible when it pays out to a third party. However, there might be a 'medical payments to others' coverage (Coverage F) which pays for minor injuries regardless of fault, usually up to a smaller limit and often without a deductible.",
        nextSteps: [
          "Attend to your guest and ensure they receive any necessary medical attention.",
          "Document the circumstances of the incident (what happened, when, where, any witnesses).",
          "Do not admit fault or make promises of payment.",
          "Contact your insurance company to report the incident, even if you're unsure if a claim will be filed.",
        ],
      },
    ],
  },
  {
    type: PolicyType.RENTERS,
    displayName: "Renters Insurance",
    icon: ApartmentIcon,
    scenarios: [
      {
        id: "renters-laptop-stolen",
        title: "My laptop was stolen from my apartment.",
        description: "Personal property coverage in your renters insurance policy helps pay to replace stolen belongings, like your laptop, whether the theft occurs in your apartment or elsewhere (e.g., from your car, subject to policy limits).",
        deductibleInfo: "You'll need to pay your policy's deductible before your insurance coverage helps replace the item. For example, if your laptop is worth $1200 and your deductible is $250, your insurance would cover up to $950 (actual cash value or replacement cost, depending on your policy).",
        nextSteps: [
          "Report the theft to the police and get a copy of the police report.",
          "Notify your landlord (though they are typically not responsible for your personal belongings).",
          "Contact your insurance company to file a claim. Provide the police report and any proof of ownership (receipts, photos).",
          "Make a list of all stolen items.",
        ],
      },
      {
        id: "renters-fire-damage",
        title: "A fire in my building damaged my belongings.",
        description: "Renters insurance provides personal property coverage for your belongings if they are damaged or destroyed by a covered peril like fire. It can also include additional living expenses (ALE) coverage if you need to temporarily live elsewhere while your apartment is uninhabitable.",
        deductibleInfo: "Your personal property coverage deductible applies to the replacement or repair of your damaged items. ALE coverage might have its own terms or no direct deductible but will have limits.",
        nextSteps: [
          "Ensure your safety first. Evacuate if necessary.",
          "Once safe, notify your landlord and your insurance company.",
          "Document all damaged property with photos/videos.",
          "Keep receipts for any temporary living expenses (hotel, food) if you're displaced.",
          "Create an inventory of damaged or destroyed items.",
        ],
      },
      {
        id: "renters-guest-injury",
        title: "A guest was injured in my rented unit.",
        description: "Personal liability coverage in your renters policy works similarly to homeowners liability. It can help cover medical expenses or legal costs if a guest is injured in your rented apartment and you are found responsible.",
        deductibleInfo: "Typically, there's no deductible for liability claims paid to others. Your policy might also include 'medical payments to others' coverage for small claims, regardless of fault.",
        nextSteps: [
          "Ensure your guest gets appropriate medical attention.",
          "Document the incident: what, when, where, and any witnesses.",
          "Avoid admitting fault.",
          "Contact your insurance provider to report the potential claim.",
        ],
      },
    ],
  },
];
