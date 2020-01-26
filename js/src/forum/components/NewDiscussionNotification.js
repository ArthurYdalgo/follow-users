import Notification from 'flarum/components/Notification';

export default class NewDiscussionNotification extends Notification {
    icon() {
        return 'fas fa-user-tag';
    }

    href() {
        const notification = this.props.notification;
        const discussion = notification.subject();

        return app.route.discussion(discussion);
    }

    content() {
        return app.translator.trans('simonxeko-follow-users.forum.notifications.new_discussion_text', {
            user: this.props.notification.fromUser(),
            title: this.props.notification.subject().title(),
        });
    }
}
