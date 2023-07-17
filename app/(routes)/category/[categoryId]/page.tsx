import Container from '@/components/ui/container';
import Billboard from '@/components/Billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';
import Filter from "@/app/(routes)/category/[categoryId]/components/filter"

import getProducts from "@/actions/getProducts"
import getCategory from '@/actions/getCategory';
import getElements from "@/actions/getElements";
import getColors from '@/actions/getColors';

import React from "react";
import MobileFilters from "@/app/(routes)/category/[categoryId]/components/mobile-filters";
import {Element, Product} from "@/types";
import axios from "axios";


interface CategoryPageProps {
   data:Product,
   params: {
      categoryId: string;
   },
   searchParams: {
      colorId: string;
      elementId: string;
   }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
                                                            data,
                                                            params,
                                                            searchParams
                                                         }) => {
   const products = await getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      elementId: searchParams.elementId,
   });


   const colors = await getColors();
   const category = await getCategory(params.categoryId);
   const element = await getElements();



   return (
      <div className="bg-white">
         <Container>
            <Billboard
               data={category.billboard}
            />
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
               <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                  <MobileFilters element={element} colors={colors}/>
                  <div className="hidden lg:block">
                     <Filter data={element} name="Element" valueKey="elementId"/>
                     <Filter
                        valueKey="colorId"
                        name="Colors"
                        data={colors}
                     />
                  </div>
                  <div className="mt-6 lg:col-span-4 lg:mt-0">
                     {products.length === 0 && <NoResults/>}
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((item) => {
                           return (
                              <ProductCard key={item.id} data={item}/>
                           )
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default CategoryPage;