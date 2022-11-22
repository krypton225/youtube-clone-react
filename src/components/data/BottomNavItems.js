import GenerateIDs, { insertIDIntoData } from "./GeneratorIDs";

const BottomNavItems = [
    { dataNameIcon: "home", goLink: "/", iconName: "homeicon" },
    { dataNameIcon: "shorts", goLink: "", iconName: "flash-outlineicon" },
    { dataNameIcon: "subscribes", goLink: "", iconName: "th-largeicon" },
    { dataNameIcon: "library", goLink: "", iconName: "desktop-1icon" },
    { dataNameIcon: "search", goLink: "", iconName: "searchicon" },
];

(() => {
    insertIDIntoData(GenerateIDs, BottomNavItems);
})();

export default BottomNavItems;