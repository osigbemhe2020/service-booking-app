interface TabFilterProps {
  tabs: { label: string; count: number; value: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

const TabFilter = ({ tabs, activeTab, onTabChange }: TabFilterProps) => {
  return (
    <div className="tab-section  flex justify-evenly bg-secondary400 rounded-2xl gap-1 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`hover:bg-secondary600 flex-1 rounded-2xl capitalize font-medium py-1 ${
            activeTab === tab.value
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
};

export default TabFilter;
