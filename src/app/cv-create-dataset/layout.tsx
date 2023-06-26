import { UserDataSetContextProvider } from '@/context/UserDataSet';

export default function Layout({ children }: any) {
    return (
      <>
        <UserDataSetContextProvider>
            <main>{children}</main>
        </UserDataSetContextProvider>
      </>
    )
  }