(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["local-seo-lite-Locations-vue"],{5649:function(t,s,e){},9627:function(t,s,e){"use strict";var i=e("5649"),n=e.n(i);n.a},ba9f:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-locations-lite"},[e("core-card",{staticClass:"aioseo-locations-card",attrs:{slug:"localBusinessInfo"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.businessInfo)+" "),e("core-pro-badge")]},proxy:!0}])},[e("core-blur",[e("core-settings-row",{staticClass:"info-name-row",attrs:{name:t.strings.name,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("local-business-name")]},proxy:!0}])}),e("core-settings-row",{staticClass:"info-business-image",attrs:{name:t.strings.image},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"image-upload"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl}}),e("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(s){return t.openUploadModal("image",["options","localBusiness","locations","business","image"])}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),e("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.minimumSize)+" ")])]},proxy:!0}])}),e("core-settings-row",{staticClass:"info-business-type",attrs:{name:t.strings.businessType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"large",options:t.businessTypes}})]},proxy:!0}])})],1),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("local-seo","local-seo-upsell","locations"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":[t.strings.businessType,t.strings.businessContact,t.strings.paymentInfo,t.strings.image]},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.locationInfo1)+" ")]},proxy:!0}])})],1)],1)},n=[],a={data:function(){return{strings:{locationsSettings:this.$t.__("Locations Settings",this.$td),description:"",locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),locationInfo2:this.$t.__("Local business information may be displayed when users search for businesses on Google search or Google Maps. Google decides on a per search basis whether to display this information or not and it’s completely automated.",this.$td),multipleLocations:this.$t.__("Multiple Locations",this.$td),displayLocationInfo:this.$t.__("Display Location Info",this.$td),businessInfo:this.$t.__("Business Info",this.$td),name:this.$t.__("Business Name",this.$td),businessType:this.$t.__("Business Type",this.$td),urls:this.$t.__("URLs",this.$td),businessAddress:this.$t.__("Business Address",this.$td),businessContact:this.$t.__("Business Contact Info",this.$td),businessIDs:this.$t.__("Business IDs",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),areaServed:this.$t.__("Area Served",this.$td),image:this.$t.__("Business Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},businessTypes:[{label:this.$t.__("default",this.$td),value:"LocalBusiness"},{label:this.$t.__("Animal Shelter",this.$td),value:"AnimalShelter"},{label:this.$t.__("Archive Organization",this.$td),value:"ArchiveOrganization"},{label:this.$t.__("Automotive Business",this.$td),value:"AutomotiveBusiness"},{label:this.$t.__("Childcare",this.$td),value:"ChildCare"},{label:this.$t.__("Dentist",this.$td),value:"Dentist"},{label:this.$t.__("Dry Cleaning/Laundry",this.$td),value:"DryCleaningOrLaundry"},{label:this.$t.__("Emergency Service",this.$td),value:"EmergencyService"},{label:this.$t.__("Employment Agency",this.$td),value:"EmploymentAgency"},{label:this.$t.__("Entertainment Business",this.$td),value:"EntertainmentBusiness"},{label:this.$t.__("Financial Service",this.$td),value:"FinancialService"},{label:this.$t.__("Food Establishment",this.$td),value:"FoodEstablishment"},{label:this.$t.__("Government Office",this.$td),value:"GovernmentOffice"},{label:this.$t.__("Health & Beauty Business",this.$td),value:"HealthAndBeautyBusiness"},{label:this.$t.__("Home & Construction Business",this.$td),value:"HomeAndConstructionBusiness"},{label:this.$t.__("Internet Cafe",this.$td),value:"InternetCafe"},{label:this.$t.__("Legal Service",this.$td),value:"LegalService"},{label:this.$t.__("Library",this.$td),value:"Library"},{label:this.$t.__("Lodging Business",this.$td),value:"LodgingBusiness"},{label:this.$t.__("Medical Business",this.$td),value:"MedicalBusiness"},{label:this.$t.__("Radio Station",this.$td),value:"RadioStation"},{label:this.$t.__("Real Estate Agent",this.$td),value:"RealEstateAgent"},{label:this.$t.__("Recycling Center",this.$td),value:"RecyclingCenter"},{label:this.$t.__("Self Storage",this.$td),value:"SelfStorage"},{label:this.$t.__("Shopping Center",this.$td),value:"ShoppingCenter"},{label:this.$t.__("Sports Activity Location",this.$td),value:"SportsActivityLocation"},{label:this.$t.__("Store",this.$td),value:"Store"},{label:this.$t.__("Television Station",this.$td),value:"TelevisionStation"},{label:this.$t.__("Tourist Information Center",this.$td),value:"TouristInformationCenter"},{label:this.$t.__("Travel Agency",this.$td),value:"TravelAgency"}]}}},o=a,l=(e("9627"),e("2877")),r=Object(l["a"])(o,i,n,!1,null,null,null);s["default"]=r.exports}}]);