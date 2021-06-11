export const treeMockData = [
  {
    title: "DemoProject",
    key: "project1",
    shortName: "parent1",
    children: [
      {
        title: "Collision Mitigation Braking",
        key: "testsuite1-1",
        shortName: "collisionMitigation",
        children: [
          {
            title: "To check the variables in Enabled",
            key: "testsuite1-1-1",
            shortName: "variableEnabled",
          },
        ],
      },
      {
        title: "LabView_RVC_DEMO",
        key: "testsuite1-2",
        shortName: "labViewRVCDemo",
      },
    ],
  },
  {
    title: "TestProject",
    key: "parent2",
    shortName: "testProject",
    children: [
      {
        title: "Test suite2-1",
        key: "testsuite2-1",
        shortName: "test_suite_2_1",
      },
      {
        title: "Test suite2-2",
        key: "testsuite2-2",
        shortName: "test_suite_2_2",
      },
    ],
  },
];
