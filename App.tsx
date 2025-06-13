
import React, { useState, useMemo } from 'react';
import { PolicyType, Scenario, SelectOption, Policy } from './types';
import { POLICIES_DATA } from './constants';
import SelectDropdown from './components/shared/SelectDropdown';
import Card from './components/shared/Card';

const App: React.FC = () => {
  const [selectedPolicyType, setSelectedPolicyType] = useState<PolicyType | null>(null);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);

  const policyOptions: SelectOption<PolicyType>[] = useMemo(() => {
    return POLICIES_DATA.map(policy => ({
      value: policy.type,
      label: policy.displayName,
      icon: policy.icon
    }));
  }, []);

  const currentPolicyData: Policy | undefined = useMemo(() => {
    return POLICIES_DATA.find(p => p.type === selectedPolicyType);
  }, [selectedPolicyType]);
  
  const scenarioOptions: SelectOption<string>[] = useMemo(() => {
    if (!currentPolicyData) return [];
    return currentPolicyData.scenarios.map(scenario => ({
      value: scenario.id,
      label: scenario.title,
    }));
  }, [currentPolicyData]);

  const currentScenarioDetails: Scenario | undefined = useMemo(() => {
    if (!currentPolicyData || !selectedScenarioId) return undefined;
    return currentPolicyData.scenarios.find(s => s.id === selectedScenarioId);
  }, [currentPolicyData, selectedScenarioId]);

  const handlePolicyTypeChange = (policyType: PolicyType) => {
    setSelectedPolicyType(policyType);
    setSelectedScenarioId(null); // Reset scenario when policy type changes
  };

  const handleScenarioChange = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
  };

  const ShieldIcon: React.FC<{className?: string}> = ({className = "w-8 h-8"}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <header className="mb-10 text-center">
        <div className="flex items-center justify-center mb-3">
          <ShieldIcon className="w-12 h-12 text-blue-600 mr-3"/>
          <h1 className="text-5xl font-extrabold text-slate-800 tracking-tight">
            Am I Covered?
          </h1>
        </div>
        <p className="mt-2 text-xl text-slate-600 max-w-2xl mx-auto">
          Quickly understand your insurance policy in common situations. No jargon, just clear answers.
        </p>
      </header>

      <main className="w-full max-w-3xl space-y-8">
        <Card className="shadow-2xl">
          <div className="space-y-6 p-2 sm:p-4">
            <div>
              <SelectDropdown<PolicyType>
                label="1. Choose your policy type:"
                options={policyOptions}
                value={selectedPolicyType}
                onChange={handlePolicyTypeChange}
                placeholder="Select a policy type..."
              />
            </div>
            
            <div>
              <SelectDropdown<string>
                label="2. Select a common scenario:"
                options={scenarioOptions}
                value={selectedScenarioId}
                onChange={handleScenarioChange}
                placeholder={selectedPolicyType ? "Select a scenario..." : "Please select a policy type first"}
                disabled={!selectedPolicyType || scenarioOptions.length === 0}
              />
            </div>
          </div>
        </Card>

        {currentScenarioDetails && (
          <Card className="animate-fadeIn shadow-2xl border-t-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 pb-3 border-b border-slate-200">{currentScenarioDetails.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">What's likely covered?</h3>
                <p className="text-slate-700 leading-relaxed">{currentScenarioDetails.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Understanding your deductible:</h3>
                <p className="text-slate-700 leading-relaxed">{currentScenarioDetails.deductibleInfo}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Next Steps:</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {currentScenarioDetails.nextSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )}

        {!selectedPolicyType && (
          <Card className="text-center py-12 shadow-xl">
             <ShieldIcon className="w-16 h-16 text-slate-300 mx-auto mb-4"/>
            <p className="text-slate-500 text-lg">Please select a policy type to get started.</p>
          </Card>
        )}

        {selectedPolicyType && !currentScenarioDetails && scenarioOptions.length > 0 && (
           <Card className="text-center py-12 shadow-xl">
            <div className="flex justify-center items-center mb-4">
              {currentPolicyData?.icon && React.createElement(currentPolicyData.icon, {className: "w-16 h-16 text-slate-300"})}
            </div>
            <p className="text-slate-500 text-lg">Now, choose a scenario from the list above to see details.</p>
          </Card>
        )}

         {selectedPolicyType && scenarioOptions.length === 0 && (
           <Card className="text-center py-12 shadow-xl">
             <div className="flex justify-center items-center mb-4">
              {currentPolicyData?.icon && React.createElement(currentPolicyData.icon, {className: "w-16 h-16 text-slate-300"})}
            </div>
            <p className="text-slate-500 text-lg">No scenarios available for this policy type yet. Please check back later.</p>
          </Card>
        )}
      </main>

      <footer className="mt-16 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Am I Covered? - For informational purposes only. Always consult your policy documents.</p>
      </footer>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
