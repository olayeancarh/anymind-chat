import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSelectChannelComponent } from './chat-select-channel.component';

describe('ChatSelectChannelComponent', () => {
  let component: ChatSelectChannelComponent;
  let fixture: ComponentFixture<ChatSelectChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSelectChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSelectChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
