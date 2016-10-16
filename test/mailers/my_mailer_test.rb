require 'test_helper'

class MyMailerTest < ActionMailer::TestCase

  test "message me" do
    msg = Message.new(
      name: 'anthony',
      email: 'anthony@example.com',
      subject: 'Hi',
      content: 'Hello from the other side'
    )

    email = MyMailer.message_me(msg).deliver_now

    refute ActionMailer::Base.deliveries.empty?

    assert_equal ['duqueawd@gmail.com'], email.to
    assert_equal ['anthony@example.com'], email.from
    assert_equal 'Hi', email.subject
    assert_equal 'Hello from the other side', email.body.to_s
  end
end
