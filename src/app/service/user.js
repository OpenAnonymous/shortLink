import User from "../model/user";
import uniqid from 'uniqid';

export async function create(data) {
    try {
        if (await User.findOne({ email: data.email })) return 0;
        const user = new User({
            fbOrGoogleId: data.fbOrGoogleId || "",
            email: data.email,
            password: data.password,
            name: data.name || uniqid.time("User-")
        });

        await user.save();
        return true;
    } catch (error) {
        console.error("Error creating user:", error);
        return false;
    }
}

export async function update(data){
    try {
        await User.findOneAndUpdate(
            {
                email : data.currentUser.email
            },
            {
                name : data.body.name
            }
        )
        return true;
    } catch (error) {
        return false;
    }
}
export async function remove(data){
    try {
        const user = await User.findOneAndDelete({
            email : data.email
        })
        return user ? true : false;
    } catch (error) {
        return false;
    }
}

export async function detail(){
    return await true;
}