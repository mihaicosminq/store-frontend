import getBillboard from "@/actions/getBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
   const products = await getProducts({isFeatured:true})
   const billboard = await getBillboard("79a832bb-98bc-4670-b028-6136162865fd");
   return (
      <Container>
         <div className="space-y-10 pb-10">
            <Billboard data={billboard}/>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
               <ProductList title="featured products" items={products}/>
            </div>
         </div>
      </Container>
   )
};

export default HomePage;








