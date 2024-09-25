import Link from "../model/link";
import User from "../model/user";
import { APP_URL_API } from "../../config/contants";
import uniqid from 'uniqid';

export async function create(data){
    const email = data.currentUser.email;
    try {
        const user = await User.findOne({ email: email });
        if(!user) return false;
        const userId = user._id;
        const {originalUrl,shortUrl,thumnalUrl,title} = data.body;
        console.log(originalUrl, title, shortUrl,thumnalUrl)
        console.log(typeof(originalUrl) ,typeof(title) ,typeof(thumnalUrl) ,typeof(shortUrl))
        const link = new Link({
            userId : userId,
            title : title || "",
            originalUrl : originalUrl,
            shortUrl : shortUrl ? shortUrl.replace(/ /g,"-") : uniqid.time(),
            thumnalUrl : thumnalUrl || ""
        })
        await link.save();
        return {
            id: link._id,
            shortUrl: `${APP_URL_API}/${link.shortUrl}`,
        };

    } catch (error) {
        console.error("Error creating link:", error);
        return false;
    }
}


export async function fcreate(data){
    try {
        const {originalUrl,shortUrl,thumnalUrl} = data.body;
        const link = new Link({
            userId : null,
            originalUrl : originalUrl,
            shortUrl : shortUrl || uniqid.time(),
            thumnalUrl : thumnalUrl || ""
        })
        await link.save();
        return {
            id: link._id,
            shortUrl: `${APP_URL_API}/${link.shortUrl}`,
        };

    } catch (error) {
        console.error("Error creating link:", error);
        return false;
    }
}


export async function remove(){
    return await true;
}
export async function detailS(keyword){
    try {
        const link = await Link.findOne({shortUrl : keyword});
        return link
    } catch (error) {
      console.error("Error fetching link:", error);
      return false;
    }
}