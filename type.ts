

type ImageAsset = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
type Slug = {
  current: string;
  _type: "slug";
};
type Category = {
  _id: string;
  name: string;
  title: string,
};
type Learn = string;

export interface ProductData {
  price: number;
  title: string;
  image: ImageAsset;
  _createdAt: string;
  hour: number;
  coursesNumber: number;
  category: Category[];
  youWillLearn: Learn[];
  slug: Slug;
  level: string;
  description: string;
  _updatedAt: string;
  quantity: number;
  rowprice: number;
  position: string;
  _id: string;
  _type: "product";
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

export interface StoreSate {
  shopper: {
    cart: ProductData[];
    wishList: ProductData[];
    userInfo: UserInfo | null;
  }
}
