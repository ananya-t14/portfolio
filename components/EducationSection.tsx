import React from "react";

const EducationSection = () => {
  const DATA = [
    {
      id: 1,
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech",
      duration: "2020 - Present",
      field: "Computer Science and Engineering",
      cgpa: "8.99",
      status: "Pursuing",
      logo: "https://scet.berkeley.edu/wp-content/uploads/8.-SRM-Logo.png",
    },
    {
      id: 2,
      institution: "Seth M.R. Jaipuria School",
      degree: "ISC",
      duration: "2018 - 2020",
      field: "PCM with CS and PE",
      status: "Completed",
      cgpa: "93.75%",
      logo: "https://www.sethmrjaipuria.school/wp-content/uploads/2019/07/2019-07-20.png",
    },
    {
      id: 3,
      institution: "Seth M.R. Jaipuria School",
      degree: "ICSE",
      field: "General with Computer Applications",
      duration: "2016 - 2018",
      status: "Completed",
      cgpa: "94.6%",
      logo: "https://www.sethmrjaipuria.school/wp-content/uploads/2019/07/2019-07-20.png",
    },
  ];
  return (
    <div className="-mt-16 pb-16">
      <div className="flex flex-col w-full mx-auto bg-transparent">
        <div>
          {" "}
          <h1 className="text-center font-bold text-4xl">
            My Education
            <hr className="w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded"></hr>
          </h1>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-purple-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Institution
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Degree
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Field of Study
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Score
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-gray-200">
                  {DATA.map((data) => {
                    return (
                      <tr key={data.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex-shrink-0 h-10 w-10 mx-auto">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={data.logo}
                              alt=""
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center mx-auto text-center">
                            <div className="mx-auto">
                              <div className="text-sm text-center mx-auto font-medium ">
                                {data.institution}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">{data.degree}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">{data.field}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {data.status === "Pursuing" ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500">
                              Active
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-600">
                              Completed
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {data.cgpa}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {data.duration}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
