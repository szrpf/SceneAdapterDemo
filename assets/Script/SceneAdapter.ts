const { ccclass, menu } = cc._decorator;

@ccclass
@menu('Comp/SceneAdapter')
export default class SceneAdapter extends cc.Component {

    protected onLoad() {
        this.resize();
        cc.view.setResizeCallback(this.resize.bind(this));
    }

    private resize() {
        let node = this.node;
        if (cc.sys.isMobile) {
            node.width = cc.winSize.width;
            node.height = cc.winSize.height;
        } else {
            if (cc.winSize.width / cc.winSize.height > node.width / node.height) {
                node.scale = cc.winSize.height / node.height;
            } else {
                node.scale = cc.winSize.width / node.width;
            }
        }
        if (!cc.sys.isMobile && !node.getComponent(cc.Mask)) {
            node.addComponent(cc.Mask);
        }
    }
}
