import DatasetsWrapper from "./DatasetsWrapper";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const fetchData = async (body: {}) => {
  const res = await fetch("http://localhost:3000/api/data-set/get-data",
  { method: 'POST', body: JSON.stringify(body)})
return res.json()
}

const Page = async () => {
  const session = await getServerSession(authOptions);

  const datasetData = fetchData({email: session?.user?.email})

  const dataset = await Promise.all([datasetData])


  return (
    <>
      <DatasetsWrapper prop={dataset}/>
    </>
  )
}

export default Page



