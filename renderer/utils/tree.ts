import { treeMockTreekData } from "../common/data/treeData";

export const getProjectSummaryTable = () => {
  treeMockTreekData.map((tree) => {
    if (tree.children) {
      return {
        ...tree.children,
        type: "Suite",
      };
    }
  });
};
