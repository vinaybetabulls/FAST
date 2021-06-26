export const treeMockTreekData = [
  {
    title: "DemoProject",
    key: "project1",
    shortName: "parent1",
    createdBy: "XYZ-PC",
    modifiedBy: "XYZ-PC",
    projectId: "12345",
    state: "Open",
    projectStatus: "Active",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    children: [
      {
        title: "Collision Mitigation Braking",
        key: "testsuite1-1",
        shortName: "collisionMitigation",
        createdBy: "ABC-PC",
        modifiedBy: "ABC-PC",
        projectId: "2543452",
        state: "Open",
        projectStatus: "Active",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        children: [
          {
            title: "To check the variables in Enabled",
            key: "testsuite1-1-1",
            shortName: "variableEnabled",
            createdBy: "EFB-PC",
            modifiedBy: "EEF-PC",
            projectId: "36457453",
            state: "Open",
            projectStatus: "Active",
            description: "",
          },
        ],
      },
      {
        title: "LabView_RVC_DEMO",
        key: "testsuite1-2",
        shortName: "labViewRVCDemo",
        createdBy: "HGY-PC",
        modifiedBy: "JKH-PC",
        projectId: "23627534",
        state: "Open",
        projectStatus: "Active",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text",
      },
    ],
  },
  {
    title: "TestProject",
    key: "parent2",
    shortName: "testProject",
    createdBy: "GHUA-PC",
    modifiedBy: "JJKH-PC",
    projectId: "785678",
    state: "Open",
    projectStatus: "Active",
    children: [
      {
        title: "Test suite2-1",
        key: "testsuite2-1",
        shortName: "test_suite_2_1",
        createdBy: "JKJL-PC",
        modifiedBy: "JJKH-PC",
        projectId: "23625234",
        state: "Open",
        projectStatus: "Active",
        description:
          "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
      },
      {
        title: "Test suite2-2",
        key: "testsuite2-2",
        shortName: "test_suite_2_2",
        createdBy: "KUL-PC",
        modifiedBy: "JKUO-PC",
        projectId: "7834593",
        state: "Open",
        projectStatus: "Active",
        description:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
      },
    ],
  },
];
