import React, { useEffect } from 'react';
import { View } from "react-native"
import { Modalize } from "react-native-modalize";
import { wp, hp } from '../../constants/Dimensions';

const BottomSheetPopup = ({
    children,
    isOpen,
    onOpen,
    onclose,
    modalHeight,
    onClosedBottom,
    ...props
}) => {

    const modal = React.createRef(null);

    useEffect(() => {
        if (isOpen === true)
            openModalBottom()
        else
            closeModalBottom()
    }, [isOpen])

    const openModalBottom = () => {
        if (modal.current)
            modal.current.open();
    }

    const closeModalBottom = () => {
        if (modal.current)
            modal.current.close();
    }

    // const onClosedBottom = () => {
    //     if (onOpen)
    //         onOpen(false);
    //     onclose;
    // }

    return (
        <Modalize
            ref={modal}
            onClosed={onClosedBottom}
            modalHeight={hp(modalHeight)}>
            {children}
        </Modalize>
    )
}

export default BottomSheetPopup

BottomSheetPopup.defaultProps = {
    modalHeight: 500,
};



