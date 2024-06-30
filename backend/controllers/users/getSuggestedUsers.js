import User from "../../models/User.js";

const getSuggestedUsers = async (req, res) => {
    try {
        const userId = req.user._id;

        const usersFollowedByYou = await User.findById(userId).select("following");

        if (!usersFollowedByYou) {
            return res.status(200).json([]);
        }

        const users = await User.aggregate([
            {
                $match: {
                    _id: { $ne: userId },
                },
            },
            {
                $sample: { size: 10 },
            },
        ]);

        const following = usersFollowedByYou.following.map(id => id.toString());
        const filteredUsers = users.filter((user) => !following.includes(user._id.toString()));

        const suggestedUsers = filteredUsers.slice(0, 4);

        suggestedUsers.forEach((user) => {
            user.password = null;
        });

        res.status(200).json(suggestedUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getSuggestedUsers };
