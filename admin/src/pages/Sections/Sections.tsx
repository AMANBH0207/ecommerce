import Loader from "../../common/Loader"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../layout/DefaultLayout"

function Sections() {
  return (
    <>
    {/* {loading && <Loader />} */}
    <DefaultLayout>

        <Breadcrumb pageName="Sections" />

    </DefaultLayout>
    </>
  )
}

export default Sections