import Text "mo:core/Text";
import Map "mo:core/Map";
import List "mo:core/List";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Product = {
    name : Text;
    category : Text;
    description : Text;
    rating : Nat;
    price : Text;
    amazonUrl : Text;
    isBestChoice : Bool;
    pros : [Text];
    cons : [Text];
    features : [Text];
    imageUrl : Text;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  type BlogPost = {
    title : Text;
    slug : Text;
    excerpt : Text;
    content : Text;
    category : Text;
    publishDate : Text;
    readTime : Nat;
  };

  module BlogPost {
    public func compare(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Text.compare(post1.title, post2.title);
    };
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  let products = Map.empty<Text, Product>();
  let blogPosts = Map.empty<Text, BlogPost>();
  let contactSubmissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func addProduct(product : Product) : async () {
    if (products.containsKey(product.name)) {
      Runtime.trap("Product with this name already exists");
    };
    products.add(product.name, product);
  };

  public shared ({ caller }) func addBlogPost(post : BlogPost) : async () {
    if (blogPosts.containsKey(post.slug)) {
      Runtime.trap("Blog post with this slug already exists");
    };
    blogPosts.add(post.slug, post);
  };

  public shared ({ caller }) func submitContactForm(submission : ContactSubmission) : async () {
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().toArray().filter(func(p) { p.category == category }).sort();
  };

  public query ({ caller }) func getBestChoiceProducts() : async [Product] {
    products.values().toArray().filter(func(p) { p.isBestChoice }).sort();
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  public query ({ caller }) func getBlogPostBySlug(slug : Text) : async BlogPost {
    switch (blogPosts.get(slug)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?post) { post };
    };
  };
};
