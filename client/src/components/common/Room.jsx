

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { ZegoSuperBoardManager } from "zego-superboard-web";
import { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";
import {useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const room = ({ session }) => {
 const location = useLocation();
    const from = location.state?.from;
    const navigate = useNavigate();
    //import id and name
    console.log(from);
    const { roomID } = from;
    const { userID,user } = useContext(Authcontext);
    const meeting = async (element) => {
        const appID = 1384061343;
        const serverSecret = "a0013951a8a1321d173fd31c7e489c14";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomID,userID, user);
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.addPlugins({ZegoSuperBoardManager});

        zc.joinRoom({
            container: element,
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            videoResolutionList: [
                ZegoUIKitPrebuilt.VideoResolution_360P,
                ZegoUIKitPrebuilt.VideoResolution_180P,
                ZegoUIKitPrebuilt.VideoResolution_480P,
                ZegoUIKitPrebuilt.VideoResolution_720P,
              ],
        })
        
    }
    return (
        <div>
            <div ref={meeting} />
            {/* <Button onClick={() => { navigate('dashboard/StudentClass/Room') }}>Join</Button> */}
            <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
    );
};

export default room;